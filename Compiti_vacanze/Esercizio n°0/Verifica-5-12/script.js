let paragrafo = document.getElementById("paragrafo");
let btnL = document.getElementById("btnLettura");
let btnC = document.getElementById("btnCucina");
let btnS = document.getElementById("btnSport");

btnL.addEventListener("click", fraseL);
btnC.addEventListener("click", fraseC);
btnS.addEventListener("click", fraseS);
function fraseL(){
    paragrafo.innerHTML = "";
    paragrafo.innerHTML = "La lettura permette di scoprire nuovi mondi e rilassarsi";
}

function fraseC(){
    paragrafo.innerHTML = "";
    paragrafo.innerHTML = "Cucinare permette di sperimentare e creare piatti deliziosi";
}

function fraseS(){
    paragrafo.innerHTML = "";
    paragrafo.innerHTML = " Fare sport aiuta a mantenersi in forma e migliorare la salute ";
}