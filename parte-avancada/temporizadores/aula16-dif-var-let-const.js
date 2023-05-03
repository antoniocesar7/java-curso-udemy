var nome = "Antonio César"
document.write(nome);

if(nome==="Antonio César"){
    var curso = "Desenvolvedor de Sistemas";
    document.write("<br>"+curso);
}
document.write("<br> Acessando fora do escopo if: "+curso)

curso = "PHP";
document.write("<br> Alterando a variável fora do escopo if, agora curso = "+curso)

if(nome==="Antonio César"){
    let cargo = "DevOps";
    document.write("<br>"+curso);
}
//console.log(cargo);
//document.write("<br> Acessando fora do escopo if: "+cargo)

let bonus = true;

document.write("<br/> O bônus está: "+bonus);

if(bonus){
    let salario = 2400 + 600;
    document.write("<br>O sálario com bônus = "+salario);
}

//fora do escopo não conseguimos acessar a variável salario, pois ela foi criada pelo let
//document.write("<br>O sálario com bônus = "+salario);

if(bonus){
    var salarioComVar = 5400 + 600;
    document.write("<br>O sálario com bônus, dentro do if = "+salarioComVar);
}
document.write("<br>O sálario com bônus, fora do if = "+salarioComVar);