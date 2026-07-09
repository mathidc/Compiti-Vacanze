let rosso = document.getElementById("rosso");
let giallo = document.getElementById("giallo");
let verde = document.getElementById("verde");
let btnAvvia = document.getElementById("btnAvvia");

btnAvvia.addEventListener("click", avviaSemaforo);

function avviaSemaforo() {
    verde.style.backgroundColor = "green";
    setTimeout(function(){
        giallo.style.backgroundColor = "yellow";
        setTimeout(() => {
            giallo.style.backgroundColor = "gray";
            verde.style.backgroundColor = "gray";
            rosso.style.backgroundColor = "red";
        },2000);
    },5000)
    
}