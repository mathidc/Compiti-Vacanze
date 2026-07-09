let campodiv = document.getElementById("campo");
let campoBut = document.getElementById("campoBottoni");
let paragrafo = document.getElementById("allert");
let intervalId;

let cont = 0;
let currentDiv = null;
let arrivato = false;
/*
    arrivato = false -> NON è ancora arrivato destra
    arrivato = true ->  è arrivato a destra
*/

let isAnimating = false;

window.onload = function()
{

    for(let i = 0; i < 10; i++)
    {
        let div = document.createElement("div");
        div.classList.add("cella");
        div.id = i;
        campodiv.appendChild(div);
    }
    let butAvvia = document.createElement("button");
    butAvvia.innerHTML = "Avvia Animazione";
    butAvvia.addEventListener("click", avvia);
    campoBut.appendChild(butAvvia);
    let br = document.createElement("br");
    campoBut.appendChild(br);
    let butFerma = document.createElement("button");
    butFerma.innerHTML = "Stoppa Animazione";
    butFerma.addEventListener("click", ferma);
    campoBut.appendChild(butFerma);

    function avvia(){
        paragrafo.innerHTML = "L'animazione partirà entro 3 secondi";
        let TimeoutId = setTimeout(()=>{
            isAnimating = true;
            paragrafo.innerHTML = "";
            avviaAnimazione();
        },3000);
    }

    function avviaAnimazione() {
        intervalId = setInterval(() => {
            if(isAnimating)
            {
                if(!arrivato)
                {
                    if(currentDiv != null)
                    {
                        currentDiv.style.backgroundColor ="yellow";
                    }
                    let Div = document.getElementById(cont);
                    
                    Div.style.backgroundColor = "blue";

                    cont++;
                    currentDiv = Div;
                    if(cont >= 9)
                    {
                        arrivato = true;
                    }

                }
                else
                {
                    if(currentDiv != null)
                    {
                        currentDiv.style.backgroundColor ="yellow";
                    }
                    let Div = document.getElementById(cont);
                    
                    Div.style.backgroundColor = "blue";

                    cont--;
                    currentDiv = Div;
                    if(cont == 0)
                    {
                        arrivato = false;
                    }
                }
            }
            
            
        },50);
    }

    function ferma(){
        if(intervalId)
        {
            clearInterval(intervalId);
            isAnimating = false;
        }
        
    }

}




