let vet = [
        {nome: "Luci Terrazzo", tipo: "LUCE", data: "2024-09-18"},
        {nome: "Climatizzatore", tipo: "CLIMA", data: "2024-09-18"},
        {nome: "Porta Garage", tipo: "PORTA", data: "2024-10-20"}
]
let contenitoreCard = document.getElementById("contenitore");
let btnAggiungiDisp = document.getElementById("btnAggiungi");
let Nome = document.getElementById("nome");
let Data = document.getElementById("data");
let Select = document.getElementById("opzione");
let tab = document.getElementById("tabella");
window.onload = function(){
    caricaComponenti();
    let cont = 1;
    btnAggiungiDisp.addEventListener("click", function(){
        let riga = {nome: Nome.value, tipo: Select.value, data: Data.value};
        vet.push(riga);
        caricaComponenti();
    })


    function caricaComponenti() {
        contenitoreCard.innerHTML = "";
        let divClas;
        for(let i = 0; i < vet.length; i++)
        {
            if(i % 3 == 0){
                divClas = document.createElement("div");
                divClas.classList.add("row");
                contenitoreCard.appendChild(divClas);
            }
            divClas.innerHTML += `
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-warning text-dark">
                        <h2>${vet[i].nome}</h2>
                    </div>
                    <div class="card-body container">
                        <div class="d-flex">
                            <p class="fw-bold">Nome: </p>
                            <p>${vet[i].nome}</p>
                        </div>
                        <div class="d-flex">
                            <p class="fw-bold">Tipo: </p>
                            <p>${vet[i].tipo}</p>
                        </div>
                        <div class="d-flex">
                            <p class="fw-bold">Stato: </p>
                            <span class="badge bg-secondary" id="span${i}">OFF</span>
                        </div>
                        <div class="d-flex">
                            <p class="fw-bold">Data: </p>
                            <p>${vet[i].data}</p>
                        </div>

                        <button class="btn btn-outline-success" id="btnON-${i}" value="${vet[i].nome}">ON</button>
                        <button class="btn btn-outline-secondary" id="btnOFF-${i}" value="${vet[i].nome}">OFF</button>
                        <button class="btn btn-danger" id="${i}">X</button>

                    </div>
                </div>
            </div>
            `
        }
        for(let i = 0; i < vet.length;i++){
            let btnX = document.getElementById(i);
            let btnON = document.getElementById("btnON-" + i);
            let btnOFF = document.getElementById("btnOFF-" + i);
            btnX.addEventListener("click", eliminaCard);
            btnON.addEventListener("click", aggiornaStoricoEventi);
            btnOFF.addEventListener("click", aggiornaStoricoEventiS);
        }
    }

    
    function eliminaCard() {
        let id = parseInt(this.id);
        vet.splice(id,1);
        caricaComponenti();
        
    }

    function aggiornaStoricoEventi(){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let qualcosa = this.id;
        let v = qualcosa.split("-");
        let id = v[1];
        let span = document.getElementById("span" + id);

        
        tab.appendChild(tr);

        td1.innerHTML = cont;
        cont++;

        td2.innerHTML = this.value + " acceso";

        span.classList.remove("bg-secondary");
        span.classList.add("bg-success");
        span.innerHTML = "ON"
        
        tr.appendChild(td1);
        tr.appendChild(td2);
    }

    function aggiornaStoricoEventiS(){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let qualcosa = this.id;
        let v = qualcosa.split("-");
        let id = v[1];
        let span = document.getElementById("span" + id);

        span.classList.remove("bg-success");
        span.classList.add("bg-secondary");
        
        span.innerHTML = "OFF"
        
        tab.appendChild(tr);

        td1.innerHTML = cont;
        cont++;

        td2.innerHTML = this.value + "  spento"; 
        
        tr.appendChild(td1);
        tr.appendChild(td2);

        
    }
}

