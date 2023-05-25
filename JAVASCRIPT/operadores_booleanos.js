//Operadores Booleanos

/* 
Igualdade: = (ou ===)
Desigualdade: != (ou !==)
Maior que: >
Menor que: <
Maior ou igual: >=
Menor ou igual: <=
*/

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

//O JavaScript apenas compara o conteúdo por padrão, ao se usar ==. 

console.log(numero == 10); //true pois o conteúdo é igual.
console.log(10 == '10') //comparação numero x texto, true pois o conteúdo é igual

//Para comparar conteúdo e tipo de variável, deve-se usar ===.

console.log(10 === '10'); //false pois o tipo é diferente.

//Recomenda-se usar sempre === para se evitar bugs.

console.clear(); //limpar console

//Para o diferente deve-se utilizar !== para evitar problemas.

console.log(10 != '10'); //false pois o conteúdo é igual.
console.log(10 != 10); //false pois o conteúdo é igual.
console.log(10 !== '10'); //true pois o tipo é diferente.

//CONJUNÇÕES LÓGICAS - importante para estruturas condicionais.

//AND => &&

let idade = 10;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log('Posso dirigir?', possoDirigir);

//OR => ||

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;

//NOT => !

const estouGostandoDoCurso = false;

console.log(estouGostandoDoCurso);

//ao se colocar ! antes da constante inverte-se o resultado.
console.log(!estouGostandoDoCurso);