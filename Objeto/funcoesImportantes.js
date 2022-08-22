const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//Serve para pergar todas chaves do objeto
console.log(Object.keys(pessoa))

//Serve para pergar todos os valores do objeto

console.log(Object.values(pessoa))

//Serve para pergar todas chaves e valores do objeto e armazena-los sub arrays

console.log(Object.entries(pessoa))


// Tira todas as chaves e valores de dentro dos sub-arrays
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Acrescentando uma no chave e valor
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
    // Serve para concaternar os atrbutos o1 e o2 dentro de dest
const obj = Object.assign(dest, o1, o2)


// O frezee ee congela o objeto
Object.freeze(obj)
obj.c = 1234
console.log(obj)