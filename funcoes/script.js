var area = document.getElementById("area");
function entrar(){
    var nome = prompt("Digite o seu nome:");

    if(nome==null || nome==""){
        alert("Algo deu errado, favor digitar um nome válido.")
        area.innerHTML = "Clique no botão para acessar..."
    }else{
        area.innerHTML = "Bem vindo "+nome;
        let botaoSair = document.createElement("button");
        let pularLinha = document.createElement("br");
        botaoSair.innerText = "Sair da Conta"
        area.appendChild(pularLinha);
        area.appendChild(botaoSair);
        botaoSair.onclick = sair;
    }

    function sair(){
        alert("Até mais!");
        area.innerHTML = "Você saiu!"
    }
}
