//ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS
//ps - ao se usar métodos se coloca (), assim como nas functions.

const array1 = [30, 12, 45, 34, 29]
let array2 = []

//Fatiamento: slice - passar indice de início e final
console.log(array1.slice(0, 2));
console.log(array1.slice(2));

//Adicionando elementos: push | unshift
/* push - adiciona elemento no final do array */

console.log('antes de add: ', array2);
array2.push(10, 20);
array2.push(40);
console.log('depois de add: ', array2);

/* unshift - adiciona elemento no início do array */

console.log('antes de add unshift', array2);
array2.unshift(1, 2, 3);
array2.unshift(0);
console.log('depois de add unshift', array2);

//Removendo elementos: pop | shift
/* pop remove por padrão o último elemento do array */

console.log('antes de remover com pop: ', array2);

let elementoRemovido = array2.pop();

console.log('depois de remover com pop: ', array2);
console.log('o elemento removido com pop foi: ', elementoRemovido);

/* shift remove o primeiro elemento do array */

console.log('antes de remover com shift: ', array2);

elementoRemovido = array2.shift();

console.log('depois de remover com shift: ', array2);
console.log('o elemento removido com shift foi: ', elementoRemovido);

//Concatenando arrays: concat (somar arrays)

console.log('array1', array1);
console.log('array2', array2);

console.log(array1.concat(array2));
console.log(array2.concat(array1));

//Buscando elementos: indexOf | lastIndexOf

let indiceDoElemento34 = array1.indexOf(34);

console.log(indiceDoElemento34);

/* quando o elemento não consta no array, a resposta será -1 
se o elemento estiver duplicado, sempre será dado o índice do primeiro*/

let array3 = [1, 2, 3, 3, 4, 5, 3];

console.log(array3.lastIndexOf(3));
/* No caso do lastIndexOf, caso o elemento apareça mais de uma vez, será dado o índice do último que aparecer. */

//Descobrindo a existência de um elemento: includes (retorna true ou false como resposta)

console.log(array1);
console.log(array1.includes(12));

//Invertendo arrays: reverse

console.log(array1);

const arrayInvertido = array1.reverse();

console.log('Array invertido: ', arrayInvertido);