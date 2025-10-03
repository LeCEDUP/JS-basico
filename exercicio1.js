// ## Exercício 1: Array e Loop - Encontrar o Maior Número

const numeros = [55, 1, 10, 452, 1001, 1000];

function encontrarMaiorNumero(lista) {
    console.log(`Descubra o maior numero de uma lista: `)
    let numeroMaior = 0;
    for (i of lista) {
        if (i > numeroMaior) {
            numeroMaior = i
        }
    }
    console.log(`O maior numero é ${numeroMaior}`)
}
encontrarMaiorNumero(numeros)
