let campoGioco = document.getElementById("grigliaGioco");
let campoStatistiche = document.getElementById("campoStatistiche");
let idTentativi = document.getElementById("numTentativi");
let numColpi = document.getElementById("numColpi");
let idTempoS = document.getElementById("tempoSec");
let idTempoM = document.getElementById("tempoMin");
let idParTempo = document.getElementById("paragrafoTempo");
let par = document.getElementById("paragrafo");
let btnNuovaPartita = document.getElementById("btnNuovaPartita");

let vetNavi = [
    {indiceCella: "1-2", lunghezza: 4, verso: "orizzontale"},
    {indiceCella: "1-8", lunghezza: 2, verso: "verticali"},
    {indiceCella: "9-9", lunghezza: 5, verso: "verticali"},
    {indiceCella: "5-3", lunghezza: 3, verso: "orizzontale"},
    {indiceCella: "8-1", lunghezza: 3, verso: "verticale"}
];

let cont = 10;
let tentativi = 0;
let naviColpite = vetNavi.length;
let idTempo;
let sec = 0;
let min = 0;
window.onload = function () {

    btnNuovaPartita.addEventListener("click", avviaPartita)

    function avviaPartita(){
        location.reload();
    }

    idTempo = setInterval(function(){
        sec++
        if(sec >= 60)
        {
            min++;
            sec = 0;
        }

        if(sec <= 9)
        {
            idTempoS.innerHTML = "0" + sec;
        }
        else
        {
            idTempoS.innerHTML = sec;
        }
        if(min <= 9)
        {
            idTempoM.innerHTML = "0" + min;
        }
        else
        {
            idTempoM.innerHTML = min;
        }
    },1000)

    for(let i = 0; i < 10; i++)
    {
        let tr = document.createElement("div");
        tr.classList.add("d-flex");

        campoGioco.appendChild(tr);
        for(let j = 0; j < 10; j++)
        {
            let td = document.createElement("div");
            td.classList.add("cella");
            td.id = i + "-" + j;
            td.addEventListener("click", affonda);
            tr.appendChild(td);
        }
    }


    for(let i = 0; i < vetNavi.length; i++)
    {
        let indIniziale = vetNavi[i].indiceCella.split("-");
        let indI = parseInt(indIniziale[0]);
        let indJ = parseInt(indIniziale[1]);
        
        if(vetNavi[i].verso == "orizzontale")
        {
            for(let j = 0; j < vetNavi[i].lunghezza; j++)
            {
                let cellaIniziale = document.getElementById(indI + "-" + indJ);
                cellaIniziale.ind = i;
                cellaIniziale.nave = "nave";
                console.log(cellaIniziale);
                indJ++;
                cellaIniziale.addEventListener("click", affonda);
            }
        }
        else
        {
            for(let j = 0; j < vetNavi[i].lunghezza; j++)
            {
                let cellaIniziale = document.getElementById(indI + "-" + indJ);
                cellaIniziale.ind = i;
                cellaIniziale.nave = "nave";
                console.log(cellaIniziale);
                indI--;
                cellaIniziale.addEventListener("click", affonda);
            }
        }
        
    }

    numColpi.innerHTML = naviColpite;
    function affonda() {
        let idNat = this.id;
        idNat = idNat.split("-");
        let i = parseInt(idNat[0]);
        let j = parseInt(idNat[1]);
        let cella = document.getElementById(i + "-" + j);


        if( cella.nave == "nave")
        {
            let ind = cella.ind;
            vetNavi[ind].lunghezza--;
            cella.classList.add("bg-danger");

            if(vetNavi[ind].lunghezza <= 0)
            {
                naviColpite--;
                numColpi.innerHTML = naviColpite
                if(naviColpite <= 0)
                {
                    par.innerHTML =     "Congratulazioni, hai abbattuto tutte le navi!!";
                    idParTempo.innerHTML  = "Tentativi svolti: " + tentativi + " Tempo impiegato: " + min + ":" + sec;
                }
            }
        }
        else
        {
            cella.classList.add("bg-primary");
        }

        

        idTentativi.innerHTML = tentativi;
        tentativi++;
        this.removeEventListener("click", affonda);
    }

    function disabilitaCelle() {
        for(let i = 0; i < 10; i++)
        {
            for(let j = 0; j < 10; j++)
            {
                let cella = document.getElementById(i + "-" + j);
                cella.removeEventListener("click", affonda);
            }
        }
    }
    
}