let primeiros = [1,2,3,4];

let numeros = [4,5,9];

console.log(numeros);

let numeros2 = [primeiros,4,5,9];

console.log(numeros2);

let numeros3 = [...primeiros,4,5,9];

console.log(numeros3);

let pessoa = {
    nome:   "Antonio César",
    idade:  45,
    cargo:  "Desenvolvedor de Sistemas"
}
console.log(pessoa);

let novaPessoa = {
    status: "ativo",
    cidade: "SBO"
}
console.log(novaPessoa);

let novaPessoa2 = {
    ...pessoa,
    status: "ativo",
    cidade: "SBO"
}
console.log(novaPessoa2);

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random()*numeros.length);
    console.log(numeros[numeroGerado]);
}

sorteador(14,8,9,7,5,6,8,78);

