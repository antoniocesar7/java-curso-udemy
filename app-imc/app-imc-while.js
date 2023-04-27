var i = 0;
var divResultado = document.createElement("div");
function criaInputs() {
    i++;
    console.log(i);
    var caixaNomeLabel = document.createElement("label");
    var caixaNomeInput = document.createElement("input");
    var brNome = document.createElement("br");
    var caixaPesoLabel = document.createElement("label");
    var brPeso = document.createElement("br");
    var caixaAlturaLabel = document.createElement("label");
    var brAltura = document.createElement("br");
    
    var caixaPesoInput = document.createElement("input");
    var botaoCalcImc = document.createElement("input");
    var caixaAlturaInput = document.createElement("input");

    var formulario = document.getElementById("formulario");
    //while (i <= 3) {
        //criando label para digitar o nome
        
        //console.log(caixaNomeLabel);
        //caixaNomeLabel[i].innerText = "Digite o seu nome: "
        //criando input e atributos para nome
        
        caixaNomeInput.setAttribute("type", "text");
        caixaNomeInput.setAttribute("name", "nome"+i);
        caixaNomeInput.setAttribute("id", "nome"+i);
        caixaNomeInput.setAttribute("placeholder", "Nome")
        
        //criando br nome para pular linha
        


        //criando label para digitar o peso
        
        caixaPesoLabel.innerText = "Digite o seu peso: "
        //criando input e atributos para peso
        
        caixaPesoInput.setAttribute("type", "text");
        caixaPesoInput.setAttribute("name", "peso"+i);
        caixaPesoInput.setAttribute("id", "peso"+i);
        caixaPesoInput.setAttribute("placeholder", "Peso")
        
        //criando br peso para pular linha
        

        //criando label para digitar o altura
        
        caixaAlturaLabel.innerText = "Digite o sua altura: "
        //criando input e atributos para altura
        
        caixaAlturaInput.setAttribute("type", "text");
        caixaAlturaInput.setAttribute("name", "altura"+i);
        caixaAlturaInput.setAttribute("id", "altura"+i);
        caixaAlturaInput.setAttribute("placeholder", "Altura")
        //criando br altura para pular linha
        

        
        botaoCalcImc.setAttribute("type", "submit");
        botaoCalcImc.setAttribute("value", "Calcular IMC");

        
        divResultado.setAttribute("id", "resultado"+i);
        // divResultado.innerHTML = "teste"+i;



        
        formulario.appendChild(caixaNomeLabel);
        formulario.appendChild(caixaNomeInput);
        formulario.appendChild(brNome);


        formulario.appendChild(caixaPesoLabel);
        formulario.appendChild(caixaPesoInput);
        formulario.appendChild(brPeso);

        formulario.appendChild(caixaAlturaLabel);
        formulario.appendChild(caixaAlturaInput);
        formulario.appendChild(brAltura);

        formulario.appendChild(botaoCalcImc);
        formulario.appendChild(divResultado);
        //i++;
    //}//fim do while
}//fim função inserir inputs (pessoas)
var pessoa = [];
var peso = [];
var altura = [];
var imc = [];
var resultado = [];
var nome = [];

function calcular(event) {

    event.preventDefault();
    
    nome[i] = document.getElementById("nome"+i).value;
    peso[i] = document.getElementById("peso"+i).value;
    altura[i] = document.getElementById("altura"+i).value;
    imc[i] = peso[i] / (altura[i] * altura[i]);
    //console.log(peso[i]);
    divResultado[i] = document.getElementById("resultado"+i);
    // resultado[1] = document.getElementById("resultado2");
    // resultado[2] = document.getElementById("resultado3");

    if (imc[i] < 17) {
        // resultado = document.getElementById("resultado");
        divResultado[i].innerHTML = '<br/>' + nome[i] + ' seu resultado foi: ' + imc[i].toFixed(2) + '<br/>Cuidado você está muito abaixo do peso!';
    } else if (imc[i] > 17 && imc[i] <= 18.49) {
        // resultado = document.getElementById("resultado");
        divResultado[i].innerHTML = '<br/>' + nome[i] + ' seu resultado foi: ' + imc[i].toFixed(2) + '<br/>Cuidado você está abaixo do peso!';
    } else if (imc[i] > 18.5 && imc[i] <= 24.99) {
        // resultado = document.getElementById("resultado");
        divResultado[i].innerHTML = '<br/>' + nome[i] + ' seu resultado foi: ' + imc[i].toFixed(2) + '<br/>Seu peso está ideal!';
    } else if (imc[i] > 25 && imc[i] <= 29.99) {
        // resultado = document.getElementById("resultado");
        divResultado[i].innerHTML = '<br/>' + nome[i] + ' seu resultado foi: ' + imc[i].toFixed(2) + '<br/>Cuidado você está acima do peso!';
    } else if (imc[i] >= i) {
        // resultado = document.getElementById("resultado");
        divResultado[i].innerHTML = '<br/>' + nome[i] + ' seu resultado foi: ' + imc[i].toFixed(2) + '<br/>Cuidado você está obeso!';
    }
    

   

}