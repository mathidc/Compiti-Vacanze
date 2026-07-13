let vet = [
        {nome: "Luci Terrazzo", tipo: "LUCE", data: "2024-09-18"},
        {nome: "Climatizzatore", tipo: "CLIMA", data: "2024-09-18"},
        {nome: "Porta Garage", tipo: "PORTA", data: "2024-10-20"}
]
let contenitoreCard = document.getElementById("contenitore");

window.onload = function(){
    caricaComponenti();
}

function caricaComponenti() {
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
                </div>
            </div>
        `
    }
}