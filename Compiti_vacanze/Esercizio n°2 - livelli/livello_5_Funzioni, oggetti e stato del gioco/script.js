let campo1 = document.getElementById("campo1");
let punteggio1 = document.getElementById("punteggio");
let punti = 0;

let vet = [
    {nome: "Sottomarino", posizione: "Est", trovato: false},
    {nome: "Veliero", posizione: "Nord", trovato: false},
    {nome: "nave", posizione: "Sud", trovato: false}
]
let campo2 = document.getElementById("campo2");


window.onload = function(){
    for(let i = 0; i < 5; i++)
    {
        for(let j = 0; j < 5; j++)
        {
            const cella = document.createElement('div');
            cella.classList.add("celle");
            if(Math.random() <= 0.5)
            {
                cella.punteggio = 10;
            }
            else
            {
                cella.punteggio = 0;
            }
            cella.addEventListener("click", cellaCliccata);
            campo1.appendChild(cella);
        }
    }

    caricaNavi();

    function cellaCliccata() {
    if( this.punteggio == 10)
    {
        this.style.backgroundColor = "gold";
        this.innerHTML = this.punteggio;
    }
    else
    {
        this.style.backgroundColor = "blue";
        this.innerHTML = this.punteggio;
    }

    punti += this.punteggio;
    punteggio1.innerHTML = punti;
}

    function caricaNavi() {
        campo2.innerHTML = "";
        for(let i = 0; i < vet.length; i++)
        {
            let divNavi = document.createElement("div");
            divNavi.innerHTML = `
                <p id="${i}"> ${vet[i].nome} - ${vet[i].posizione} - ${vet[i].trovato}</p>
            `;
            if(vet[i].trovato == true){
                let p = document.getElementById(i);
                p.style.backgroundColor = "green";
            }
            campo2.appendChild(divNavi);
        }
    }

    function trovaNavi() {
        let i = Math.floor(Math.random()*vet.length);
        vet[i].trovato = true;
        caricaNavi();
    }
}


