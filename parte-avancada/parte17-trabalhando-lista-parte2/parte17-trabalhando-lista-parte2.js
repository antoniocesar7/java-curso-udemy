let listagem = [5,3,"José","Fulano",9,"JOSE","José","josé"];

let busca = listagem.find((item)=>{
    return item === "José";
})

// console.log(busca);
function criaElementos(){
    //criando formulário
    formulario = document.createElement("form");
    //formulario = onsubmit();
    document.body.appendChild(formulario);

//criando os brs
// pulaLinha = document.createElement("br");


//*************Criando a primeira inserção */
    //criando o label
    let caixaLabel1 = document.createElement("label");
    caixaLabel1.innerText = "Digite algo para adicionar na lista?";
    formulario.appendChild(caixaLabel1);

    //criando inputs
    let caixaInput1 = document.createElement("input");
    caixaInput1.setAttribute("type","text");
    caixaInput1.setAttribute("id","item1");
    caixaInput1.setAttribute("name","item1")
    //caixaInput1.setAttribute("value","acertando");
    formulario.appendChild(caixaInput1);
    formulario.appendChild(document.createElement("br"));
    //formulario.appendChild(pulaLinha);
   
    //***************Criando a segunda inserção */
//criando label
let caixaLabel2 = document.createElement("label");
caixaLabel2.innerText = "Digite algo para adicionar na lista?";
formulario.appendChild(caixaLabel2);


//criando inputs
let caixaInput2 = document.createElement("input");
caixaInput2.setAttribute("type","text");
caixaInput2.setAttribute("id","item2");
caixaInput2.setAttribute("name","item2")
//caixaInput2.setAttribute("value","acertando");
formulario.appendChild(caixaInput2);
// formulario.appendChild(pulaLinha);
formulario.appendChild(document.createElement("br"));


//*************Criando a inserção 3 */
//criando label
    let caixaLabel3 = document.createElement("label");
    caixaLabel3.innerText = "Digite algo para adicionar na lista?";
    formulario.appendChild(caixaLabel3);
   

    //criando inputs
    let caixaInput3 = document.createElement("input");
    caixaInput3.setAttribute("type","text");
    caixaInput3.setAttribute("id","item3");
    caixaInput3.setAttribute("name","item3");
    //caixaInput3.setAttribute("value","acertando");
    formulario.appendChild(caixaInput3);
    // formulario.appendChild(pulaLinha);
    formulario.appendChild(document.createElement("br"));


    //*********************BOTÃO PARA ADICIONAR */
    botao = document.createElement("button");
    botao.innerText = "Enviar";
    botao.setAttribute("onclick","retornoLista()");
    formulario.appendChild(botao);
    //formulario.appendChild(pulaLinha);
    
     

}

//criaElementos();

function retornoLista(){
    let listagem = [];
    listagem[0] = document.getElementById("item1").value;
    listagem[1] = document.getElementById("item2").value;
    listagem[2] = document.getElementById("item3").value;

    let busca = listagem.find((item)=>{
        return item === "José";
    });

    //console.log(busca);
    document.write(busca);
    
    

}
