var pessoa = [];
var peso = [];
var altura = [];
var imc = [];
var resultado = [];
var nome = [];
function calcular(event){
    event.preventDefault();
    nome[0]     = document.getElementById("nome01").value;
    peso[0]     = document.getElementById("peso01").value;
    altura[0]   = document.getElementById("altura01").value;
    imc[0] = peso[0]/(altura[0]*altura[0]);
    //console.log(peso[0]);
    resultado[0] = document.getElementById("resultado1");
    resultado[1] = document.getElementById("resultado2");
    resultado[2] = document.getElementById("resultado3");

    if(imc[0]<17){
        // resultado = document.getElementById("resultado");
        resultado[0].innerHTML = '<br/>'+nome[0]+' seu resultado foi: '+imc[0].toFixed(2)+'<br/>Cuidado você está muito abaixo do peso!';                   
    }else if(imc[0]>17 && imc[0]<=18.49){
        // resultado = document.getElementById("resultado");
        resultado[0].innerHTML = '<br/>'+nome[0]+' seu resultado foi: '+imc[0].toFixed(2)+'<br/>Cuidado você está abaixo do peso!';  
    }else if(imc[0]>18.5 && imc[0]<=24.99){
        // resultado = document.getElementById("resultado");
        resultado[0].innerHTML = '<br/>'+nome[0]+' seu resultado foi: '+imc[0].toFixed(2)+'<br/>Seu peso está ideal!';  
    }else if(imc[0]>25 && imc[0]<=29.99){
        // resultado = document.getElementById("resultado");
        resultado[0].innerHTML = '<br/>'+nome[0]+' seu resultado foi: '+imc[0].toFixed(2)+'<br/>Cuidado você está acima do peso!';  
    }else if(imc[0]>=30){
        // resultado = document.getElementById("resultado");
        resultado[0].innerHTML = '<br/>'+nome[0]+' seu resultado foi: '+imc[0].toFixed(2)+'<br/>Cuidado você está obeso!';  
    }
    // console.log(imc[0]);
    //  console.log(peso);
    //  console.log(altura);
    // alert("Teste")

    nome[1]     = document.getElementById("nome02").value;
    peso[1]     = document.getElementById("peso02").value;
    altura[1]   = document.getElementById("altura02").value;
    imc[1] = peso[1]/(altura[1]*altura[1]);
    if(imc[1]<17){
        // resultado = document.getElementById("resultado");
        resultado[1].innerHTML = '<br/>'+nome[1]+' seu resultado foi: '+imc[1].toFixed(2)+'<br/>Cuidado você está muito abaixo do peso!';                   
    }else if(imc[1]>17 && imc[1]<=18.49){
       // resultado = document.getElementById("resultado");
       resultado[1].innerHTML = '<br/>'+nome[1]+' seu resultado foi: '+imc[1].toFixed(2)+'<br/>Cuidado você está abaixo do peso!';  
   }else if(imc[1]>18.5 && imc[1]<=24.99){
       // resultado = document.getElementById("resultado");
       resultado[1].innerHTML = '<br/>'+nome[1]+' seu resultado foi: '+imc[1].toFixed(2)+'<br/>Seu peso está ideal!';  
   }else if(imc[1]>25 && imc[1]<=29.99){
       // resultado = document.getElementById("resultado");
       resultado[1].innerHTML = '<br/>'+nome[1]+' seu resultado foi: '+imc[1].toFixed(2)+'<br/>Cuidado você está acima do peso!';  
   }else if(imc[1]>=30){
       // resultado = document.getElementById("resultado");
       resultado[1].innerHTML = '<br/>'+nome[1]+' seu resultado foi: '+imc[1].toFixed(2)+'<br/>Cuidado você está obeso!';  
    }

    nome[2]     = document.getElementById("nome03").value;
    peso[2]     = document.getElementById("peso03").value;
    altura[2]   = document.getElementById("altura03").value;
    imc[2] = peso[2]/(altura[2]*altura[2]);
    if(imc[2]<17){
        // resultado = document.getElementById("resultado");
        resultado[2].innerHTML = '<br/>'+nome[2]+' seu resultado foi: '+imc[2].toFixed(2)+'<br/>Cuidado você está muito abaixo do peso!';                   
    }else if(imc[2]>17 && imc[2]<=18.49){
       // resultado = document.getElementById("resultado");
       resultado[2].innerHTML = '<br/>'+nome[2]+' seu resultado foi: '+imc[2].toFixed(2)+'<br/>Cuidado você está abaixo do peso!';  
   }else if(imc[2]>18.5 && imc[2]<=24.99){
       // resultado = document.getElementById("resultado");
       resultado[2].innerHTML = '<br/>'+nome[2]+' seu resultado foi: '+imc[2].toFixed(2)+'<br/>Seu peso está ideal!';  
   }else if(imc[2]>25 && imc[2]<=29.99){
       // resultado = document.getElementById("resultado");
       resultado[2].innerHTML = '<br/>'+nome[2]+' seu resultado foi: '+imc[2].toFixed(2)+'<br/>Cuidado você está acima do peso!';  
   }else if(imc[2]>=30){
       // resultado = document.getElementById("resultado");
       resultado[2].innerHTML = '<br/>'+nome[2]+' seu resultado foi: '+imc[2].toFixed(2)+'<br/>Cuidado você está obeso!';  
    }



}