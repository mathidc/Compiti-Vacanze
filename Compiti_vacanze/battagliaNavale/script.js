let campoGioco = document.getElementById("grigliaGioco");
let campoStatistiche = document.getElementById("campoStatistiche");
let cont = 10;
let tentativi = 0;
window.onload = function () {
    for(let i = 0; i < 10; i++)
    {
        let tr = document.createElement("div");
        tr.classList.add("d-flex");

        campoGioco.appendChild(tr);
        for(let j = 0; j < 10; j++)
        {
            let td = document.createElement("div");
            td.classList.add("cella");
            let rand = Math.random()*100;
            if(cont > 0 && rand < 10)
            {
                cont--;
                td.nave = "nave";
                console.log(td);
            }
            else
            {
                td.nave = "acqua";
            }
            
            td.id = i + "-" + j;
            td.addEventListener("click", affonda);
            tr.appendChild(td);
        }
    }
    function affonda() {
        let idNat = this.id;
        idNat = idNat.split("-");
        let i = idNat[0];
        let j = idNat[1];
        let id = document.getElementById(i + "-" + j);
        if(this.nave == "nave")
        {
            this.classList.add("bg-danger");

        }
        else
        {
            this.classList.add("bg-primary");
        }
        tentativi++;
        this.removeEventListener("click", affonda);
    }
    
}