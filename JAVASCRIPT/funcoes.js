//FUNÇÕES 
//DEFINIR UM NOME PARA A FUNÇÃO E DEPOIS CHAMAR A FUNÇÃO POR ELE.

function saudacao() {
    console.log('olá, seja bem vindo(a)');
}

saudacao();

//Como enviar parâmetros para as funções:
//Os parâmetros são colocados dentro dos ().
//ps - a crase serve para se chamar funções em meio a uma string.

function saudacao(nome, curso) {
    console.log(`olá, ${nome} seja bem vindo(a) ao curso de ${curso}!`);
}

saudacao('Gil', 'JavaScript');

//Retorno da função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = soma(10, 20);
console.log(resultado / 2);

//ps - a função sempre é encerrada após o return. Porém depende do contexto, por exemplo, o if permite dois return.
console.clear();

function maiorQue50(numero) {
    if (numero > 50) {
        return true;
    }
    return false;
}

let resposta = maiorQue50(60);
console.log(resposta);