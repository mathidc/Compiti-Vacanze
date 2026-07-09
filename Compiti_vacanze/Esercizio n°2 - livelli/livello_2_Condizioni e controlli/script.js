let input1 = document.getElementById("num1");
let ris1 = document.getElementById("ris1");

let input2 = document.getElementById("num2");
let ris2 = document.getElementById("ris2");

let input3 = document.getElementById("num3");
let hint = document.getElementById("idAiuto");
let tentativi = document.getElementById("idTentativi");
let numTentativi = 5;
let rand = Math.floor(Math.random()*20)+1;
console.log(rand);

let inputName = document.getElementById("inputNome");
let inputEmail = document.getElementById("inputEmail");
let inputMessage = document.getElementById("inputMessaggio");


function controlla() {
    let num = parseInt(input1.value);
    if(num > 0)
    {
        ris1.innerHTML = "Positivo"
    }
    else if(num < 0)
    {
        ris1.innerHTML = "Negativo"
    }
    else
    {
        ris1.innerHTML = "uguale a zero"
    }
}


function indicaPariDispari() {
    let num = parseInt(input2.value);
    if(num % 2 == 0)
    {
        ris2.innerHTML = "Pari";
    }
    else
    {
        ris2.innerHTML = "Dispari"
    }

}

function verifica() {
    let num = parseInt(input3.value);
    if(num <= 0 || num >= 20)
    {
        hint.innerHTML = "Il numero scelto non è compreso, scegli un numero compreso tra 1 e 20";
    }
    else
    {
        if(numTentativi <= 0)
        {
            hint.innerHTML = "Hai perso, avrai più fortuna la prossima volta!";
        }
        else
        {
            if(num > rand)
            {
                numTentativi -= 1;
                tentativi.innerHTML = numTentativi;
                hint.innerHTML = "Il numero scelto è più basso";
            }
            else if(num < rand)
            {
                numTentativi -= 1;
                tentativi.innerHTML = numTentativi;
                hint.innerHTML = "Il numero scelto è più alto";
            }
            else
            {
                hint.innerHTML = "Congratulazioni, hai indovinato il numero!";
            }
        }
        
    }
    
}


function controllaErrori() {
    let Name = inputName.value;
    let Email = inputEmail.value;
    let Message = inputMessage.value;

    if(Name == "" || Email == "" || Message == "")
    {
        alert("Attenzione uno dei campi non è stato compilato!!");
    }
}