let campoGioco = document.getElementById("grigliaGioco");
let campoStatistiche = document.getElementById("campoStatistiche");
let cont = 10;

window.onload = function () {
    for(let i = 0; i < 10; i++)
    {
        let tr = document.createElement("div");
        tr.classList.add("d-flex");

        campoGioco.appendChild(tr);
        for(let j = 0; j < 10; j++)
        {
            let rand = Math.random()*100;
            if(rand < 10)
            {
                cont--;
                
            }
            let td = document.createElement("div");
            td.classList.add("cella");
            td.id = i + "-" + j;
            tr.appendChild(td)
        }
    }
    
    
}