// COERSÃO (CONVERSÃO) DE TIPOS  

//1 - Coersão Explícita (Manual)

const numero = 10;
console.log(numero, typeof numero);

const numeroEmFormatoString = String(numero);

console.log(numeroEmFormatoString, typeof numeroEmFormatoString);

console.log(Number('1321314'));
console.log(parseInt('1321.314')); //converte e arredonda o número
console.log(parseFloat('1321.314')); //similar ao Number, converte texto p/numero.
console.log(Boolean(0)); //Qualquer número diferente de 0 será true.

console.clear();

//2 - Coersão Implícita (Automática)

console.log('10' + 1);
console.log('10' - 1);
/* quando é soma o JS concatena, quando é subtração o JS faz a operação. */

//Outros exemplos

//Qual será a saída desses códigos?

let n = 1 + "1"; //'11' texto 11 (resultado)

n = n - 1; //10 pois '11' - 1 (uando é subtração o JS faz a operação.)

console.log(n); //aparece apenas o resultado de n = n - 1


console.log(2 + 3 + 4 + "5"); //95 pois 5 é texto
console.log("5" + 2 + 3 + 4); //5234 pois tudo será transformado em texto
console.log("10" - "4" - "3" - 2 + "5"); //15 pois em subtração o texto vira numero e em adição permanece texto.