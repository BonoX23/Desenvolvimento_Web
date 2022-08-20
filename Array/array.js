console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


// Mais utilizado para substituir um elemento
aprovados[3] = 'Paulo'
    // mais utilizado para acrescentar um elemento
aprovados.push('Abia')
    // Mostra quantos elemntos dentro o array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
    // Ordena em ordem alfabética, altera o array original
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
    // Primeiro paramentro é o indice, 
    //o segundo paramentro é a quantidade de 
    //elementos que vc quer excluir a partir daquele paramentro
    // terceiro paramentro vc coloca o que vc quer acrescentar
aprovados.splice(1, 1)
console.log(aprovados)