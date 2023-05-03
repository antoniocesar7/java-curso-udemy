let pessoa = {
    nome    : "Antonio César",
    idade   : 45,
    altura  : 1.75,
    cargo   : "Instrutor de Formação Profissional"

};
console.log(pessoa);
document.write("<br/> O que temos dentro do objeto pessoa, propriedade nome: "+pessoa.nome);
document.write("<br/> O que temos dentro do objeto pessoa, propriedade idade: "+pessoa.idade);
document.write("<br/> O que temos dentro do objeto pessoa, propriedade altura: "+pessoa.altura);
document.write("<br/> O que temos dentro do objeto pessoa, propriedade cargo: "+pessoa.cargo);

let usuario = [
    {nome : "Antonio César", cargo: "Desenvolvedor",         status: "Ativo"},
    {nome : "Juliana ",      cargo: "Professora",            status: "Ativo"},
    {nome : "Giovana",       cargo: "Atriz/Jornalista",      status: "Ativo"},
    {nome : "Michel",        cargo: "Jogador/Desenvolvedor", status: "Ativo"},
    {nome : "Luana",         cargo: "Veterinária/Médica",    status: "Ativo"},

]

console.log(usuario);
console.log("O tamanho do array usuário = "+usuario.length);

document.write("<br/> No array usuário, nome "+usuario[0].nome+" Cargo "+usuario[0].cargo+" status "+usuario[0].status);
document.write("<br/> No array usuário, nome "+usuario[1].nome+" Cargo "+usuario[1].cargo+" status "+usuario[1].status);
document.write("<br/> No array usuário, nome "+usuario[2].nome+" Cargo "+usuario[2].cargo+" status "+usuario[2].status);
document.write("<br/> No array usuário, nome "+usuario[3].nome+" Cargo "+usuario[3].cargo+" status "+usuario[3].status);