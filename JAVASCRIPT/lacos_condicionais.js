// > LAÇOS CONDICIONAIS

const input = require('readline-sync'); //importa a biblioteca que lê os dados de usuário

const numero_sorteado = 5;

let numero = Number(input.question('Qual numero voce escolhe?'));

while (numero !== numero_sorteado) {
    console.log('Voce errou o numero. Tente novamente...');

    numero = Number(input.question('Qual numero voce escolhe?'));
}

console.log('Voce acertou!!!');

//Enquanto estiver errrado o while repetirá, quando acertar o while é interrompido e aparecerá a mensagem de acerto.