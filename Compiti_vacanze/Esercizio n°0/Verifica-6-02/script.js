let Entra = document.getElementById("btnEntra");
let Esce = document.getElementById("btnEsce");
let Reset = document.getElementById("btnReset");
let idNum = document.getElementById("numPresenti");
let statoAula = document.getElementById("statoAula");

let num = 0;

Entra.addEventListener("click", function() {
    num++;
    Esce.disabled = false;
    if(num >= 25)
    {
        statoAula.innerHTML = "Aula piena";
        Entra.disabled = true;
    }
    else if(num >= 20)
    {
        statoAula.innerHTML = "Aula quasi piena";
    }
    else if(num >= 1)
    {
        statoAula.innerHTML = "Aula attiva"
    }
    else
    {
        statoAula.innerHTML = "Aula vuota"
    }
    idNum.innerHTML = num;
});

Esce.addEventListener("click", function() {
    Entra.disabled = false;
    num--;
    if(num <= 0)
    {
        Esce.disabled = true;
    }
    
    if(num >= 25)
    {
        statoAula.innerHTML = "Aula piena";
        Entra.disabled = true;
    }
    else if(num >= 20)
    {
        statoAula.innerHTML = "Aula quasi piena";
    }
    else if(num >= 1)
    {
        statoAula.innerHTML = "Aula attiva"
    }
    else
    {
        statoAula.innerHTML = "Aula vuota"
    }
    idNum.innerHTML = num;
});

Reset.addEventListener("click", function() {
    num = 0;
    
    Entra.disabled = false;
    Esce.disabled = false;
    if(num >= 25)
    {
        statoAula.innerHTML = "Aula piena";
        Entra.disabled = true;
    }
    else if(num >= 20)
    {
        statoAula.innerHTML = "Aula quasi piena";
    }
    else if(num >= 1)
    {
        statoAula.innerHTML = "Aula attiva"
    }
    else
    {
        statoAula.innerHTML = "Aula vuota"
    }
    idNum.innerHTML = num;
});
