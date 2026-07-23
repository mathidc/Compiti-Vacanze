let campoGioco = document.getElementById("grigliaGioco");
let campoStatistiche = document.getElementById("campoStatistiche");
let idTentativi = document.getElementById("numTentativi");
let numColpi = document.getElementById("numColpi");
let idTempoS = document.getElementById("tempoSec");
let idTempoM = document.getElementById("tempoMin");
let idParTempo = document.getElementById("paragrafoTempo");
let par = document.getElementById("paragrafo");
let btnNuovaPartita = document.getElementById("btnNuovaPartita");
let cont = 10;
let tentativi = 0;
let naviColpite = 0;
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
            let rand = Math.random()*100;
            if(cont > 0 && rand < 10)
            {
                cont--;
                td.nave = "nave";
                console.log(td);
                naviColpite++;
            }
            else
            {
                td.nave = "acqua";
            }
            
            td.id = i + "-" + j;
            td.addEventListener("click", affonda);
            tr.appendChild(td);
        }
    }

    numColpi.innerHTML = naviColpite;
    function affonda() {
        let idNat = this.id;
        idNat = idNat.split("-");
        let i = idNat[0];
        let j = idNat[1];
        let id = document.getElementById(i + "-" + j);
        if(this.nave == "nave")
        {
            this.classList.add("bg-danger");
            naviColpite--;
            numColpi.innerHTML = naviColpite;
            if(naviColpite <= 0)
            {
                par.innerHTML = "Congratulazioni, hai affondato tutte le navi in " + tentativi + " tentativi";
                idParTempo.innerHTML = "Tempo usato: " + min + ":" + sec
                clearInterval(idTempo);
                disabilataCelle();
            }
        }
        else
        {
            this.classList.add("bg-primary");
        }
        
        idTentativi.innerHTML = tentativi;
        tentativi++;
        this.removeEventListener("click", affonda);
    }

    function disabilataCelle() {
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