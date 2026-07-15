"use strict";
let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");
let ris = document.getElementById("risultato");
let campo = document.getElementById("campo");
let punteggio = document.getElementById("spnPunteggio");
let tempo = document.getElementById("spnTimer");


let punt = 0;
let temp = 30;
let sec = 30;

let idCreaS;
let idCreaB;
let idAggiornaTimer;

// -----------------------------------------------------------------------
// ESERCIZIO 1 – avviaGioco()
// -----------------------------------------------------------------------
function avviaGioco() {
    // TODO
    btnStart.disabled = true;
    punt = 0;
    temp = 30;
    punteggio.innerHTML = punt;
    tempo.innerHTML = temp;
    btnStop.disabled = false;
    campo.innerHTML = "";
    ris.innerHTML = "";
    idCreaS = setInterval(creaStella ,800);
    idCreaB = setInterval(creaBomba, 1000);
    idAggiornaTimer = setInterval(aggiornaTimer,1000);


}

// -----------------------------------------------------------------------
// ESERCIZIO 2 – creaStella()
// -----------------------------------------------------------------------
function creaStella() {
    // TODO
    let divStella = document.createElement("div");
    divStella.innerHTML = "🌠"
    divStella.classList.add("stella");

    let rand = Math.floor(Math.random()*570);
    divStella.style.left = rand + "px";

    divStella.style.top = "0px";
    
    divStella.addEventListener("click", clickStella);

    
    campo.appendChild(divStella);

    avviaMovimento(divStella);
}

// -----------------------------------------------------------------------
// ESERCIZIO 3 – avviaMovimento(stella)
// -----------------------------------------------------------------------
function avviaMovimento(element) {
    // TODO
    const idInterval = setInterval(function(){
      let randPix = Math.floor(Math.random()*5);
      let marginTop = parseInt(element.style.top) + randPix;
      element.style.top = marginTop + "px";
      if(marginTop >= 420)
      {
        clearInterval(idInterval);
      }
    },30);
}

// -----------------------------------------------------------------------
// ESERCIZIO 4 – clickStella()
// -----------------------------------------------------------------------
function clickStella() {
    // TODO
    punt += 1;
    this.innerHTML = "";
    punteggio.innerHTML = punt;
    this.removeEventListener("click", clickStella);
}

// -----------------------------------------------------------------------
// ESERCIZIO 5 – aggiornaTimer()
// -----------------------------------------------------------------------
function aggiornaTimer() {
    // TODO
    sec--;
    tempo.innerHTML = sec;
    if(sec <= 0)
    {
        fermaGioco();
    }
}

// -----------------------------------------------------------------------
// ESERCIZIO 6 – creaBomba()
// -----------------------------------------------------------------------
function creaBomba() {
    // TODO
    let divBomba = document.createElement("div");
    divBomba.innerHTML = "💣"
    divBomba.classList.add("bomba");

    let rand = Math.floor(Math.random()*570);
    divBomba.style.left = rand + "px";

    divBomba.style.top = "0px";
    
    divBomba.addEventListener("click", clickBomba);

    
    campo.appendChild(divBomba);

    avviaMovimento(divBomba);
}

// -----------------------------------------------------------------------
// ESERCIZIO 7 – clickBomba()
// -----------------------------------------------------------------------
function clickBomba() {
    // TODO
    punt -= 2;
    this.innerHTML = "";
    punteggio.innerHTML = punt;
    this.removeEventListener("click", clickBomba);      
    
}

// -----------------------------------------------------------------------
// ESERCIZIO 8 – fermaGioco()
// -----------------------------------------------------------------------
function fermaGioco() {
    // TODO
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(idCreaB);
    clearInterval(idCreaS);
    clearInterval(idAggiornaTimer);
    if(sec <= 0)
    {
        ris.innerHTML = "La partita è terminata. Il tuo punteggio è di " + punt;
    }
    else
    {
        ris.innerHTML = "Il gioco è stato stoppato";
    }

}
