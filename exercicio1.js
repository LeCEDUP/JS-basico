// Exercício 1: Array e Loop - Encontrar o Maior Número
// Descrição
// Crie uma função chamada `encontrarMaiorNumero` que recebe um array de números como argumento. A função deve retornar o maior número presente no array.

const numeros1 = [123, 164, 16, 18, 99]
const numeros2 = [234, 43, 434,43, 999]


function encontrarMaiorNumero(numeros){
    let maiorNumero = 0
    for (let i = 0; i < numeros.length; i++)
        if (numeros[i] > maiorNumero){
            maiorNumero = numeros[i]
        }
    return maiorNumero
}

console.log(`O maior número é ${encontrarMaiorNumero(numeros2)}`)