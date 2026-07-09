let campo1 = document.getElementById("campo1");
let ris1 = document.getElementById("paragrafo1");

let campo2 = document.getElementById("campo2");

let campo3 = document.getElementById("campo3");

let campo4 = document.getElementById("campo4");

window.onload = function (){
    for(let i = 1; i < 11; i++)
    {
        let but = document.createElement("button");
        but.classList.add("btn");
        but.classList.add("btn-outline-primary");
        but.classList.add("m-1");
        but.id = i;
        but.innerHTML = i;
        but.addEventListener("click",btncliccato);
        campo1.appendChild(but);
        
    }

    let testo = 1;
    for(let i = 0; i < 5; i++)
    {
        for(let j = 0; j < 5; j++)
        {
            const cella = document.createElement('div');
            cella.classList.add("celle");
            cella.innerHTML = testo;
            campo2.appendChild(cella);
            testo++;
        }
    }

    
    for(let i = 0; i < 5; i++)
    {
        for(let j = 0; j < 5; j++)
        {
            const cella = document.createElement('div');
            cella.classList.add("celle");
            cella.addEventListener("click", cellaCliccata);
            campo3.appendChild(cella);
            
        }
    }

    for(let i = 0; i < 5; i++)
    {
        for(let j = 0; j < 5; j++)
        {
            const cella = document.createElement("div");
            cella.classList.add("celle");
            if(Math.random() < 0.2)
            {
                cella.speciale = "speciale"
            }
            else
            {
                cella.speciale = "no"
            }
            cella.addEventListener("click", cellaCliccataSpeciale);
            campo4.appendChild(cella);

        }
    }
}


function btncliccato(){
    paragrafo1.innerHTML = "Hai scelto il numero: " + this.id;
}

function cellaCliccata() {
    this.classList.remove("celle");
    this.classList.add("cellaCliccata");
}

function cellaCliccataSpeciale() {
    if(this.speciale == "speciale")
    {
        this.style.backgroundColor = "gold";
        alert("Hai trovato una cella speciale")
    }
    else
    {
        this.style.backgroundColor = 'blue';
    }
}