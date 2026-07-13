let tempoSec = document.getElementById("sec");
let tempoMin = document.getElementById("min");
let Temperatura = document.getElementById("Temperatura");
let div = document.getElementById("divColorato");
let paragrafo = document.getElementById("allerta");


let temp = 18;
let width = 180;

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

