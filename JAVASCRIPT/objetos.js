//OBJETOS {} - variáveis entre chaves

//Como criar um objeto no JavaScript?

let pessoa = {
    'nome': 'Gil',
    'idade': 38,
}

console.log(pessoa);
console.log(pessoa.idade);

//forma alternativa de chamar o objeto
console.log(pessoa['nome']);

//Como adicionar um par chave-valor?

pessoa.altura = 1.73;

console.log(pessoa);

//como remover um par chave-valor?

delete pessoa.altura

//como percorrer entre os objetos?

for (let chave in pessoa) {
    console.log(chave);
}