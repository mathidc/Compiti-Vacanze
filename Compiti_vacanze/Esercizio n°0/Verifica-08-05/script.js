let campo = document.getElementById("campoPosti");
let vet = [];
let inputC = document.getElementById("inputCognome");
let inputN = document.getElementById("inputNome");
let btnAnnulla = document.getElementById("btnAnnulla");
let btnConferma = document.getElementById("btnConferma");
let campobtn = document.getElementById("campobtn");
let indAttuale = -1;
let idattuale = "";


window.onload = function() {
    for(let i = 0; i < 8; i++)
    {
        let riga = document.createElement("div");
        riga.classList.add("d-flex");
        campo.appendChild(riga);
        for(let j = 0; j < 10; j++)
        {
            let col = document.createElement("div");
            col.innerHTML = i + "-" + j;
            col.id = i + "-" + j;
            col.classList.add("cella");
            col.classList.add("bg-success");
            col.classList.add("m-2");
            col.classList.add("text-center");
            col.classList.add("rounded-2");
            col.addEventListener("click", modificaStato);
            let element = {posto: i + "-" + j,stato: "libero",nome: "", cognome: ""};
            vet.push(element);
            riga.appendChild(col);
        }
    }
    console.log(vet);

    function modificaStato() {
        let id = this.id;
        idattuale = this.id;
        let v = id.split("-");
        let vRiga = parseInt(v[0]);
        let vCol = parseInt(v[1]);
        this.classList.remove("bg-success");
        this.classList.add("bg-secondary");
        indAttuale = vRiga*10+vCol;
        vet[indAttuale].stato = "occupato"
        campobtn.classList.remove("d-none");
        
        console.log(vet);

        this.removeEventListener("click", modificaStato);
    }

    btnAnnulla.addEventListener("click", function(){
            campobtn.classList.add("d-none");
            vet[indAttuale].stato = "libero"
            let cella = document.getElementById(idattuale);
            cella.classList.remove("bg-secondary");
            cella.classList.add("bg-success");
            
            
        })

        btnConferma.addEventListener("click", function() {
            vet[indAttuale].nome = inputN.value;
            vet[indAttuale].cognome = inputC.value;
            campobtn.classList.add("d-none");
        });
}