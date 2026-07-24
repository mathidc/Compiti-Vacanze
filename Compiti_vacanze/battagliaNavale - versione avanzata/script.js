let campoGioco = document.getElementById("grigliaGioco");
let campoStatistiche = document.getElementById("campoStatistiche");
let idTentativi = document.getElementById("numTentativi");
let numColpi = document.getElementById("numColpi");
let idTempoS = document.getElementById("tempoSec");
let idTempoM = document.getElementById("tempoMin");
let idParTempo = document.getElementById("paragrafoTempo");
let par = document.getElementById("paragrafo");
let btnNuovaPartita = document.getElementById("btnNuovaPartita");
let btnMostraNavi = document.getElementById("btnMostraNavi");


/*
let vetNavi = [
    {indiceCella: "1-2", lunghezza: 4, verso: "orizzontale"},
    {indiceCella: "1-8", lunghezza: 2, verso: "verticali"},
    {indiceCella: "9-9", lunghezza: 5, verso: "verticali"},
    {indiceCella: "5-3", lunghezza: 3, verso: "orizzontale"},
    {indiceCella: "8-1", lunghezza: 3, verso: "verticale"}
];

*/
let idSetInt;
let vetNavi = [];
let contSec = 0;
let cont = 10;
let tentativi = 0;
let naviColpite;
let idTempo;
let sec = 0;
let min = 0;
window.onload = function () {
        btnMostraNavi.addEventListener("click", mostraNavi);
        btnNuovaPartita.addEventListener("click", avviaPartita);

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
            td.nave = "nonave";
            td.addEventListener("click", affonda);
            tr.appendChild(td);
        }
    }

    caricaVet();

    function caricaVet(){
        let min = 3;
        let max = 7;
        let lengthVet = Math.floor(Math.random()* (max - min +1)) + min;
        for(let i = 0; i < lengthVet; i++)
        {
            let indI = Math.floor(Math.random()*10);
            let indJ = Math.floor(Math.random()*10);
            let lung = Math.floor(Math.random()*5)+2;
            let versoCella = Math.random()*100;
            let idPos = indI + "-" + indJ;
            let creaCella = true;
            let direzione;
            if(versoCella <= 50)
            {
                direzione = "orizzontale";
                if(lung + indJ >= 10)
                {
                    creaCella = false;
                }
                else{
                    let i1 = indI;
                    let j1 = indJ;
                    for(let k = 0; k < lung;k++){
                        let cel = document.getElementById(i1 + "-" + j1);
                        if(cel.nave=="nave")
                            creaCella = false;
                        j1++;
                    }
                }
                
            }
            else
            {
                direzione = "verticale";
                if(indI - lung < 0)
                {
                    creaCella = false;
                }
                else{
                    let i1 = indI;
                    let j1 = indJ;
                    for(let k = 0; k < lung;k++){
                        let cel = document.getElementById(i1 + "-" + j1);
                        if(cel.nave=="nave")
                            creaCella = false;
                        i1--;
                    }
                }
                
            }

            if(creaCella)
            {
                let rigaVet = {indiceCella: idPos, lunghezza: lung, verso: direzione};
                for(let k = 0; k < rigaVet.lunghezza;k++){
                    if(rigaVet.verso == "orizzontale"){
                        let cel = document.getElementById(indI + "-" + indJ);
                        cel.nave = "nave";
                        indJ++;
                    }
                    if(rigaVet.verso == "verticale"){
                        let cel = document.getElementById(indI + "-" + indJ);
                        cel.nave = "nave";
                        indI--;
                    }
                }
                vetNavi.push(rigaVet);
            }
            else
            {
                i--;
            }
                
        }
        naviColpite = lengthVet;
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
            cella.toccato = "cliccato";

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

    function mostraNavi() {
        idSetInt = setInterval(function (){
            if(contSec >= 3)
            {
                
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
                            cellaIniziale.classList.remove("bg-danger");
                            if(cellaIniziale.toccato == "cliccato")
                            {
                                cellaIniziale.classList.add("bg-danger");
                            }
                            indJ++;
                        }
                    }
                    else
                    {
                        for(let j = 0; j < vetNavi[i].lunghezza; j++)
                        {
                            let cellaIniziale = document.getElementById(indI + "-" + indJ);
                            cellaIniziale.classList.remove("bg-danger");
                            if(cellaIniziale.toccato == "cliccato")
                            {
                                cellaIniziale.classList.add("bg-danger");
                            }
                            indI--;
                        }
                    }
                }
                clearInterval(idSetInt);
            }
            else
            {
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
                            cellaIniziale.classList.add("bg-danger");
                            indJ++;
                        }
                    }
                    else
                    {
                        for(let j = 0; j < vetNavi[i].lunghezza; j++)
                        {
                            let cellaIniziale = document.getElementById(indI + "-" + indJ);
                            cellaIniziale.classList.add("bg-danger");
                            indI--;
                        }
                    }
                }
            }
            contSec++;
        },1000);
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