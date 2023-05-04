let pessoa = {
    nome :      "Antonio César", 
    sobrenome:  "Fernandes",
    empresa:    "SENAI",
    cargo:      "Desenvolvedor de Sistemas"
}

//se tiver uma variável com nomes iguais, exemplo cargo
let cargo = "Diretor"

//desconstruindo objetos
const {nome,sobrenome,empresa,cargo:cargoPessoa} = pessoa;

document.write(`Nome Pessoa: ${nome} <br>`);
document.write(`Sobrenome:   ${sobrenome}<br>`);
document.write(`Empresa:     ${empresa}<br>`);
document.write(`Cargo:       ${cargoPessoa}<br>`);
//Desconstruindo Array
let timesFutebol = [
    "Corinthians",
    "Gavioes Escolinha",
    "União Barbarense",
    "Jornal d'Oeste"
];

document.write(`<h2>***********Acessando o array de times*************/<h2>`);
document.write(`<ul>
                    <li>${timesFutebol[0]}</li>
                    <li>${timesFutebol[1]}</li>
                    <li>${timesFutebol[2]}</li>
                    <li>${timesFutebol[3]}</li>
                </ul>`)

const {0:primeiroTime,1:segundoTime,2:terceiroTime,3:quartoTime} = timesFutebol;

document.write(`<h2>***********Desconstruindo o array de times*************/<h2>
                <h3>const {0:primeiroTime,1:segundoTime,2:terceiroTime,3:quartoTime} = timesFutebol;</h3>
                
            `);
document.write(`<ul>
                    <li>${primeiroTime}</li>
                    <li>${segundoTime}</li>
                    <li>${terceiroTime}</li>
                    <li>${quartoTime}</li>
                </ul>`)

const [primeiro,segundo,terceiro,quarto] = timesFutebol;                

document.write(`<h2>***********Desconstruindo o array de times*************/<h2>
                <h3>const [primeiro,segundo,terceiro,quarto] = timesFutebol;
                    *obs.: atenção para os colchetes!!!</h3>
                
            `);
document.write(`<ul>
                    <li>${primeiro}</li>
                    <li>${segundo}</li>
                    <li>${terceiro}</li>
                    <li>${quarto}</li>
                </ul>`)


