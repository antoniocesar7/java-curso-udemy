//****************função setInterval normal...*************************
// function acao (){
//     document.write("Executando...<br />")
// }

// setInterval(acao,3000);

//****************função setInterval com anônima...*************************
// setInterval(()=>{
//     document.write("Executando com função anônima...<br />");
// },3000);


//****************Criando um variável para parar a função..*************************
// var timer =  setInterval(()=>{
//     document.write("Executando com função anônima...<br />");
// },1000);


function acao (){
    document.write("Executando...<br />")
}

setTimeout(acao,3000);//quando a página rolar, depois de 3 segundos ela irá executar esta ação...