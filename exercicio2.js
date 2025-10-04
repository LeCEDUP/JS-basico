// ## Exercício 2: Array e Loop - Soma de Elementos Pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1000]
function somarPares(lista) {
    let soma = 0
    for (i of lista) {
        if (i%2 == 0) {
            soma += i
        }
    }
    return soma
}

console.log(`A soma de todos os numeros pares da lista [${numeros}] é: ${somarPares(numeros)}`)