// LAÇOS NUMÉRICOS (for) - estrutura de repetição controlada, define quantas vezes repetirá.

const input = require('readline-sync'); //importa a biblioteca que lê os dados de usuário

// O problema
/* 
const nota1 = Number(input.question('Informe a nota 1: '));
const nota2 = Number(input.question('Informe a nota 2: '));
const nota3 = Number(input.question('Informe a nota 3: '));

let media = (nota1 + nota2 + nota3) / 3; 
*/

//Acumulador - variável que acumula valores.

let acumulador = 0;

acumulador = acumulador + 10;
acumulador += 2; //somar, subtrair, etc.
acumulador++ //incrementa uma unidade

console.log(acumulador);

//Estrutura for

for (let i = 0; i < 10; i++) {
    //i = interação (variável) iniciando de 0, enquanto i for menor que 10, será somado 1 unidade (i++)
    console.log('Repetição', i);
}

console.clear();

//Resolução do problema inicial

let nota //cria-se a variável.
let soma = 0;

for (let i = 1; i <= 3; i++) { //para informar as notas 1 até a 3 (menor ou igual)
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))

    soma = soma + nota //chama a variável soma;
        //o código armazena as 3 notas e soma 3 vezes devido á condição de repetição.
}

console.log(`A média do aluno é ${soma / 3}.`);