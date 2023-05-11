function convidados(...nome){
    //console.log(nome);
    contador = nome.length;
    //console.log(contador);

    var container = document.getElementById("container");
    labelConvidados = document.createElement("label");
    labelConvidados.innerText = "Sejam Bem vindos Todos os convidados";
    container.appendChild(labelConvidados);

    idDivEstatica = document.getElementById("inserindoNoPaiDiv");
    labelNome = [];
    //console.log(labelNome);
    for(let i=0;i<contador;i++){
        labelNome[i] = document.createElement("label");         
        labelNome[i].innerText = nome[i];
        idDivEstatica.appendChild(labelNome[i]);
        idDivEstatica.appendChild(document.createElement("br"));
    }

   
        
        // labelNome[0] = document.createElement("label"); 
        // labelNome[0].innerText = nome[0];
        // idDivEstatica.appendChild(labelNome[0]);
        // idDivEstatica.appendChild(document.createElement("br"));

        // labelNome[1] = document.createElement("label"); 
        // labelNome[1].innerText = nome[1];
        // idDivEstatica.appendChild(labelNome[1]);
        // idDivEstatica.appendChild(document.createElement("br"));
  
    
    

    

    
   

    

}

convidados("NomeFulano1","NomeFulano2","NomeFulano3","mais um nome");