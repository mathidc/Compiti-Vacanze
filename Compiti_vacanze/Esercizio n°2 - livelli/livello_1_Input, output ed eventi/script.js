let input = document.getElementById("nomeId");
let hide = document.getElementById("idNascosto");

let Aumento = document.getElementById("aumento");
let cont = 0;

let quadro = document.getElementById("riquadro");

let divNas = document.getElementById("DivNascosto");
let nas = false;

function salutare(){
    let nome = input.value;
    hide.innerHTML = "ciao, " + nome;
}

function conta() {
    
    cont += 1;
    Aumento.innerHTML = cont;

}

function cambiaColore(color){
    quadro.style.backgroundColor = color;
}

function nascondi(){
    if(nas == false)
    {
        divNas.classList.add("d-none");
        nas = true;
    }
    else
    {
        divNas.classList.remove("d-none");
        nas = false;
    }
    
}