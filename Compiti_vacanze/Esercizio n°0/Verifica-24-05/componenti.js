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

window.onload = function(){
    caricaComponenti();

    btnAggiungiDisp.addEventListener("click", function(){
        let riga = {nome: Nome.value, tipo: Select.value, data: Data.value};
        vet.push(riga);
        contenitoreCard.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <h2>${riga.nome}</h2>
                </div>
                <div class="card-body container">
                    <div class="d-flex">
                        <p class="fw-bold">Nome: </p>
                        <p>${riga.nome}</p>
                    </div>
                    <div class="d-flex">
                        <p class="fw-bold">Tipo: </p>
                        <p>${riga.tipo}</p>
                    </div>
                    <div class="d-flex">
                        <p class="fw-bold">Stato: </p>
                        <span class="bagde badge-secondary">OFF</span>
                    </div>
                    <div class="d-flex">
                        <p class="fw-bold">Data: </p>
                        <p>${riga.data}</p>
                    </div>

                    <button class="btn">
                </div>
            </div>
        `
    })
}

function caricaComponenti() {
    contenitoreCard.innerHTML = "";
    for(let i = 0; i < vet.length; i++)
    {
        contenitoreCard.innerHTML += `
            <div class="card">
                <div class="card-header">
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
                        <span class="bagde badge-secondary">OFF</span>
                    </div>
                    <div class="d-flex">
                        <p class="fw-bold">Data: </p>
                        <p>${vet[i].data}</p>
                    </div>

                    <button class="btn">
                </div>
            </div>
        `
    }
}