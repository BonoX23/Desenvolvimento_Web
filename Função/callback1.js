const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
/* a função a baixo lembra o for */
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

for (let carros in fabricantes) {
    console.log({
            carros + 1)
    }