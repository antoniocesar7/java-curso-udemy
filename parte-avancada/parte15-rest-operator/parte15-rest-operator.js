function convidados(...nomes){
    console.log("SEJAM TODOS BEM VINDO");
    console.log(nomes);
}

convidados("Antonio","César","Joaquina");

lista = ["Antonio","César","Joaquina"];

lista.map((item,index)=>{
    console.log(`Passando: ${item}` );
})

numeros = [5,3,2];
let total = numeros.reduce((acumulador,numero,indice,original) => {
    console.log(`${acumulador} - total até  o momento`)
    console.log(`${numero} valor atual`)
    console.log(`${indice} indice atual`)
    console.log(`${original} array original`)
    return acumulador += numero;
})

console.log(total);