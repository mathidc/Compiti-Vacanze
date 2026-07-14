let tempoSec = document.getElementById("sec");
let tempoMin = document.getElementById("min");
let Temperatura = document.getElementById("Temperatura");
let div = document.getElementById("divColorato");
let paragrafo = document.getElementById("allerta");
let btnAttivaControllo = document.getElementById("btnAttivaControllo");
let btnStoppa = document.getElementById("btnStoppa");
let allertaGrave = document.getElementById("allertaSeria");

let temp = 18;
let width = 180;
let contSec = 10;

const intervallo = 1000;

window.addEventListener("keydown", (event) => {

    if(event.code === "Space" || event.key === " ")
    {
        temp += 0.5;
        width += 10;
        div.style.backgroundColor = "red";
        div.style.width = width + "px";
    }

    if(event.code === "Backspace")
    {
        temp -= 0.5;
        width -= 10;
        div.style.backgroundColor = "red";
        div.style.width = width + "px";
    }

    if(temp <= 17)
    {
        div.style.backgroundColor = "blue";
        paragrafo.innerHTML = "Si consiglia di spegnere il climatizzatore";
    }

    if(temp >= 26)
    {
        paragrafo.innerHTML = "Si consiglia di accendere il climatizzatore";
        paragrafo.style.backgroundColor = "lightyellow";
    }

    if(temp > 17 && temp < 26)
    {
        paragrafo.innerHTML = "";
    }

    Temperatura.innerHTML = temp + " °C";
});

let sec = 0;
let min = 0;

window.onload = function (){
    div.style.backgroundColor = "red";
    div.style.height = 40 + "px"
    div.style.width = width + "px";

    
    setInterval(scorrimentoTempo,1000);

    btnAttivaControllo.addEventListener("click", attivaControllo)

    function attivaControllo() {
        if(temp >= 50)
        {
            const idIntervallo = setInterval(() => {
                contSec--;
                allertaGrave.innerHTML = "ALLARME! temperatura oltre 50 C. Scatta tra " + contSec + " secondi";
                paragrafo.style.backgroundColor = "orange";
                
                if(contSec == 0)
                {
                    clearInterval(idIntervallo);
                    console.log("Intervallo fermato");
                    temp = 18;
                    width = 180;
                    contSec = 10;
                    div.style.width = width + "px";
                    Temperatura.innerHTML = temp + " °C";
                    allertaGrave.innerHTML = "";
                }
                    
            }, intervallo);
            
            
        }
    }
}

function scorrimentoTempo() {
    sec++;
    if(sec >= 60)
    {
        min++;
        sec = 0;
    }
    if(sec < 9)
    {
        tempoSec.innerHTML ='0' + sec ;
    }
    else 
    {
        tempoSec.innerHTML = sec;
    }

    if(min < 9)
    {
        tempoMin.innerHTML = '0' + min;
    }
    else
    {
        tempoMin.innerHTML = min;
    }
}

