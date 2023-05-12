let nomes = ["Josefino","Josefa","Clodoaldo","Agnaldo","Edivaldo","Carlos","Romualdo","Carlos", "Romeu"];
document.write(`O resultado que vem da função include: ${nomes.includes("Carlos")}, pois o nome consta na lista`);

//Observação a variável tem que ser string
let nomes1 = `Josefino,Josefa,Clodoaldo,Agnaldo,Edivaldo,Carlos,Romualdo,Carlos, Romeu`;
//console.log(nomes1.startsWith("Jos"));
document.write(`<br><br><br>Com a função startsWith ela retorna: ${nomes1.startsWith("Jos")} da variável string, pois ela começa com Jos`);
//********Função endsWith retorna no final da string***** */
let nomes2 = `Josefino,Josefa,Clodoaldo,Agnaldo,Edivaldo,Carlos,Romualdo,Carlos, Romeu`;
//console.log(nomes2.endsWith("Jos"));
document.write(`<br><br><br>Com a função startsWith ela retorna: ${nomes2.endsWith("meu")} da variável string, pois ela começa com meu`);