

window.onload = function(){
    let btnattiva = document.getElementById("btnavvia");
    let btnferma = document.getElementById("btnferma");
    let btnazzera = document.getElementById("btnazzera");
    let idSecondi = document.getElementById("secondi");
    let idMillisecondi = document.getElementById("millisecondi");
    let secondi = 0;
    let Millisecondi = 0;
    let attivo = false;
    let timer1;


    let ris = document.getElementById("risultato");
    let input = document.getElementById("inputRovescia");
    let idbtn = document.getElementById("btnContoRovescia");
    let secondi2 = 0;


    let campo = document.getElementById("griglia");
    let tempo = document.getElementById("tempo");
    let ris2 = document.getElementById("risultato2");
    let trovati = document.getElementById("trovati");
    const vet = [];
    


    btnattiva.addEventListener("click",function(){
        clearInterval(timer1);
        attivo = true;
        timer1 = setInterval(function() {
            if(attivo==true){
                Millisecondi += 100;
                if(Millisecondi > 1000)
                {
                    Millisecondi = 0;
                    secondi++;
                }
                idMillisecondi.innerHTML = Millisecondi / 100;
                idSecondi.innerHTML = secondi;
            }

        },100);
    })
    btnferma.addEventListener("click",function(){
        attivo = false;
    })

    btnazzera.addEventListener("click", function(){
        secondi = 0;
        Millisecondi = 0;
        idMillisecondi.innerHTML = Millisecondi / 100;
        idSecondi.innerHTML = secondi;
        attivo = false;
    })

    let timer;
    idbtn.addEventListener("click",function(){
        clearInterval(timer);
        let inputRovescia = parseInt(input.value);
        secondi2 = inputRovescia;
        timer = setInterval(function() {
            if(secondi2 <= 0)
            {
                clearInterval(timer);
                ris.innerHTML = "Tempo Terminato!";
            }
            else
            {
                ris.innerHTML = secondi2;
                secondi2--;
            }
        },1000);
    });


    for (let i = 0; i < 5; i++)
    {
        for(let j = 0; j < 5; j++)
        {
            let div = document.createElement("div");
            div.classList.add("cella");
            div.id = i + "-" + j;
            div.addEventListener("click", clickSuCella);

            campo.appendChild(div);
        }
    }

    for (let i = 0; i < 5; i++)
    {
        let x = Math.floor(Math.random()*5);
        let y = Math.floor(Math.random()*5);
        let coppia = {x,y};
        let controllo = vet.some(elemento => JSON.stringify(elemento) === JSON.stringify(coppia));
        if(controllo == true)
        {
            i--;
        }
        else
        {
            vet[i] = coppia;
        }
    }

    let vinto = false;
    let contSpeciali = 0;
    let sec = 30;
    let Timer2 = setInterval(function (){
        if(vinto == false)
        {
            if(sec <= 0)
            {
                ris2.innerHTML = "Tempo scaduto!";
            }
            else
            {
                sec--;
                tempo.innerHTML = sec;
            }
        }
        
    },1000)

    function clickSuCella() {
        let v = this.id.split("-");
        let x = parseInt(v[0]);
        let y = parseInt(v[1]);
        let coppia = {x,y};
        let esiste = vet.some(elemento => JSON.stringify(elemento) === JSON.stringify(coppia));
        if(esiste==true)
        {
            this.style.backgroundColor = "gold";
            contSpeciali++;
            ris2.innerHTML = contSpeciali;
            if(contSpeciali >= 5)
            {
                ris2.innerHTML = "Congratulazioni!!! Hai vinto!!!"
                vinto = true;

            }
        }
        else
        {
            this.style.backgroundColor = "blue";
        }

    }


}
