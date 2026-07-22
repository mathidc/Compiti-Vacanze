let contenitoreVideo = document.getElementById("contenitoreVideo");
let btnBiglietto = document.getElementById("btnBiglietto");
let contenitoreDomande = document.getElementById("contenitoreDomande");
let btnVerifica = document.getElementById("verifica");

btnBiglietto.addEventListener("click", domandaQuiz);
let par = document.getElementById("paragrafo")

function domandaQuiz() {
    contenitoreVideo.classList.add("d-none");
    contenitoreDomande.classList.remove("d-none");
    
}

function verificaRisposta() {
    const rispostaCorretta = "anelli";
    const bottoneSelezionato = document.querySelector('input[name="risposta"]:checked');
    if (!bottoneSelezionato) {
        par.textContent = "Seleziona una risposta!";
        return;
    }
    const valoreSelezionato = bottoneSelezionato.value;
    
    if (valoreSelezionato === rispostaCorretta)
    {
        par.textContent = "Risposta corretta.";
    } else {
        par.textContent = "Risposta sbagliata. Riprova!";
    }
}