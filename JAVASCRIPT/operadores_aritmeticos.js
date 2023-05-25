//OPERADORES ARITMÉTICOS

let primeiroNumero = 20;
let segundoNumero = 2;
//nunca se inicia a variável com números!

/* Adição: +
Subtração: -
Multiplicação: *
Divisão: /
Exponenciação: **
Resto da divisão: %
*/

console.log('soma =', primeiroNumero + segundoNumero);

const soma = primeiroNumero + segundoNumero;
console.log('soma =', soma);
console.log('Subtração =', primeiroNumero - segundoNumero);
console.log('Multiplicação =', primeiroNumero * segundoNumero);
console.log('Divisão =', primeiroNumero / segundoNumero);
console.log('Exponenciação =', primeiroNumero ** segundoNumero);
console.log('Resto da divisão =', primeiroNumero % segundoNumero);

//PRECEDÊNCIA DE OPERADORES

console.log((3 + 7) * 3); //similar à matemática, o que estiver entre parênteses é a prioridade
console.log((10 + 7 + 8) / 3);

//BIBLIOTECA Math

console.log(Math.PI);
console.log(Math.random);