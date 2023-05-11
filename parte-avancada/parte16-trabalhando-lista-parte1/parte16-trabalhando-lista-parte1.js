function convidados(primeiroNome,segundoNome,terceiroNome){
    
    var container = document.getElementById("container");
    labelConvidados = document.createElement("label");
    labelConvidados.innerText = "Sejam Bem vindos Todos os convidados";
    container.appendChild(labelConvidados);
    

    idDivEstatica = document.getElementById("inserindoNoPaiDiv");
    
    labelNome1 = document.createElement("label");
    labelNome1.innerText = primeiroNome;
    idDivEstatica.appendChild(labelNome1);
    idDivEstatica.appendChild(document.createElement("br"));

    
    labelNome2 = document.createElement("label");
    labelNome2.innerText = segundoNome;
    idDivEstatica.appendChild(labelNome2);
    idDivEstatica.appendChild(document.createElement("br"));

    labelNome3 = document.createElement("label");
    labelNome3.innerText = terceiroNome;
    idDivEstatica.appendChild(labelNome3);
    idDivEstatica.appendChild(document.createElement("br"));

    

}

convidados("NomeFulano1","NomeFulano2","NomeFulano3");