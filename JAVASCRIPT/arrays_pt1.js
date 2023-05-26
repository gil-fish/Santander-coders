//ARRAYS [] - Parte 1

//Como criar um array? (agrupa dados de variável - índices)

let array = ['Gil', 38, 1.73, true]

console.log(array);

//Como acessar os elementos do array. (o indice sempre começa a contagem pelo 0)

console.log('Primeiro elemento: ', array[0]);
console.log('Segundo elemento: ', array[1]);
console.log('Terceiro elemento: ', array[2]);
console.log('Quarto elemento: ', array[3]);

//Como obter o tamanho do array. (.length)
console.log(array.length);

console.clear();

//Percorrendo arrays. (for)
//primeiro método:
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//segundo método (for of)
//a cada interação um elemento do array será escolhido. ['Gil', 38, 1.73, true]
for (let elemento of array) {
    console.log(elemento);
}

//terceiro método (for in)
//a cada interação um indice do array será escolhido. [0,1,2,3]
for (let indice in array) {
    console.log(indice);
}