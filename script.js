
const domandeQuiz = [
    {domanda: "Quando è caduto l'Impero Romano?",
    opzioni: ["456", "466", "476","486"],
    rispostaCorretta: 2
    },
    {domanda: "Quante squadre di calcio di Roma si trovano in serie A?",
    opzioni: ["1", "2", "3","4"],
    rispostaCorretta: 1
    },
    {domanda: "In che regione si trova Roma?",
    opzioni: ["Emilia-Romagna", "Molise", "Campania","Lazio"],
    rispostaCorretta: 3
    }
];
let campoQuiz = document.getElementById("campoQuiz");
let cont = 0;

window.onload = function(){

    for(let i = 0; i < domandeQuiz.length; i++)
    {
        let div = document.createElement("div");
        div.classList.add("mb-5");
        div.innerHTML = `
            <h5>${domandeQuiz[i].domanda}</h5>
            <label>
                <input type="radio" name="dom${i}" value="${domandeQuiz[i].opzioni[0]}">${domandeQuiz[i].opzioni[0]}
            </label>
            <br>
            <label>
                <input type="radio" name="dom${i}" value="${domandeQuiz[i].opzioni[1]}">${domandeQuiz[i].opzioni[1]}
            </label>
            <br>
            <label>
                <input type="radio" name="dom${i}" value="${domandeQuiz[i].opzioni[2]}">${domandeQuiz[i].opzioni[2]}
            </label>
            <br>
            <label>
                <input type="radio" name="dom${i}" value="${domandeQuiz[i].opzioni[3]}">${domandeQuiz[i].opzioni[3]}
            </label>

        `
        campoQuiz.appendChild(div);
    }

    let but = document.createElement("button");
    but.classList.add("btn");
    but.classList.add("btn-primary");
    but.innerHTML = "Controlla risposte"
    but.addEventListener("click", controlloRisposte);
    campoQuiz.appendChild(but);

    function controlloRisposte() {
        for(let i = 0; i < domandeQuiz.length; i++)
        {
            let input = document.getElementsByName("dom"+ i);
            for(let j = 0; j < 4; j++)
            {
                if(input[j].checked == true)
                {
                    if(domandeQuiz[i].rispostaCorretta == j)
                    {
                        cont++;
                    }
                }
            }
        }
        let ris = document.createElement("p");
        ris.innerHTML= "Hai risposto correttamente: " + cont + " / 3"
        campoQuiz.appendChild(ris);
    }
}

