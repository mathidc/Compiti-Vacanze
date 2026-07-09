let input1 = document.getElementById("inputTabellina");
let campo1 = document.getElementById("campoTabelline");

let input2 = document.getElementById("inputElemento");
let campo2 = document.getElementById("campo");

const vet = ["acqua", "colpito", "acqua", "colpito", "acqua", "colpito"];
let campo3 = document.getElementById("campoElementi");

const vetCitta = ["Roma", "Milano", "Torino", "Ruffia"];
let input4 = document.getElementById("inputCitta");
let campo4 = document.getElementById("campoCitta");


function svolgiTabelline() {
    campo1.innerHTML = "";
    let inputTab = parseInt(input1.value);
    let ris = 0;

    for(let i = 1; i < 11; i++)
    {
        let divTab = document.createElement("div");
        ris = inputTab * i;
        divTab.innerHTML = inputTab + "*" + i + "=" + ris;

        campo1.appendChild(divTab);
        ris = 0;
    }
}


function aggiungiElementi() {
    let lista = document.createElement("li");
    lista.classList.add("list-group-item");


    let inputLista = input2.value;

    lista.innerHTML = inputLista;
    campo2.appendChild(lista);
    input2.value = "";
}

function contaColpiti() {
    let cont = 0;
    for(let i = 0; i < vet.length; i++)
    {
        if(vet[i] == "colpito")
        {
            cont++;
        }
    }
    campo3.innerHTML = "Hai colpito " + cont + " elementi"
}

function ControllaCitta() {
    let citta = input4.value;
    let trovata = false;
    for (let i = 0; i < vetCitta.length; i++)
    {
        if(vetCitta[i] == citta)
        {
            trovata = true;
        }
    }
    if(trovata == true)
    {
        campo4.innerHTML = "La città è presente";
    }
    else
    {
        campo4.innerHTML = "La città NON è presente";
    }
}