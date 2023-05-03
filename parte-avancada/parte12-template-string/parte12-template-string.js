//Template String

let nome = "Antonio César";
let sobrenome = "Fernandes";
let idade = 45;

//Concatenação pelo jeito antigo
document.write(`Concatenação com o jeito antigo:<br>`);
document.write("O usuário chama "+nome+" "+sobrenome+" e tem "+idade+" anos de idade<br>");
document.write(`*************************************************************************<br>`);
//Concatenação pela nova forma, template string
document.write(`Concatenação com o jeito novo, string template:`);
document.write(`<br> O usuário chama ${nome} ${sobrenome} e tem ${idade} anos de idade`);