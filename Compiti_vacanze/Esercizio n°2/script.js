let campo = document.getElementById("giocoMatriciale");
let divTextBox = document.getElementById("textBox");

let butGiocatore1;
let butGiocatore2;
let cont = 0;
let width1 = 100;
let width2 = 100;

let turno = true;
/*
    turno = true -> giocatore 1,
    turno = false -> giocatore 2.
*/

let textBox1 = document.createElement("input");
textBox1.type = 'text';
textBox1.id = 'textBoxGiocatore1';
textBox1.className = 'form-control';
textBox1.placeholder = 'Scrivi il nome del giocatore 1'

divTextBox.appendChild(textBox1);

let textBox2 = document.createElement("input");
textBox2.type = 'text';
textBox2.id = 'textBoxGiocatore2';
textBox2.className = 'form-control';
textBox2.placeholder = 'Scrivi il nome del giocatore 2'

divTextBox.appendChild(textBox2);

window.onload = function() {
    
    let btnAvvia = document.getElementById("btnAvvia");
    
    btnAvvia.addEventListener("click", gioca);

}


function gioca() {
    
    for(let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 6; j++)
        {
            let but = document.createElement("button");
            but.classList.add("m-2");
            but.classList.add("cella");
            let randButVal = Math.floor(Math.random() * 101) - 50;
            but.valore = randButVal;
            but.id = i + "-" + j;
            but.addEventListener("click", cambioDimensioneBottoni);
            campo.appendChild(but);
        }
    }
    butGiocatore1 = document.createElement("button");
    butGiocatore2 = document.createElement("button");

    butGiocatore1.classList.add("buttonGiocatore1");
    butGiocatore1.innerHTML = textBox1.value;
    campo.appendChild(butGiocatore1);
    let br = document.createElement("br");
    campo.appendChild(br);
    butGiocatore2.classList.add("buttonGiocatore2");
    butGiocatore2.innerHTML = textBox2.value;
    campo.appendChild(butGiocatore2);
}

function cambioDimensioneBottoni() {
    let id = this.id;
    cont++;
    let coordinate = id.split("-");
    let riga = parseInt(coordinate[0]);
    let colonna = parseInt(coordinate[1])
    this.disabled = true;
    this.innerHTML = this.valore;
    this.style.color = "black";
    let widthMod1 = 0;
    let widthMod2 = 0;

    if(turno)
    {
        widthMod1 += this.valore;
        width1 += widthMod1;
        butGiocatore1.style.width = width1 + "px";
        turno = false;
    }
    else
    {
        widthMod2 += this.valore;
        width2 += widthMod2;
        butGiocatore2.style.width = width2 + "px";
        turno = true;
    }
    

    if(width1 <= 0)
    {
        alert("Ha vinto " + textBox2.value);
    }
    else if (width2 <= 0)
    {
        alert("Ha vinto " + textBox1.value);
    }

    if(cont >= 18)
    {
        if(width1 > width2)
        {
            alert("Ha vinto " + textBox1.value);
        }
        else
        {
            alert("Ha vinto " + textBox2.value);
        }
    }
}