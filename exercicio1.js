// Exercício 1: Array e Loop - Encontrar o Maior Número
// Descrição
// Crie uma função chamada `encontrarMaiorNumero` que recebe um array de números como argumento. A função deve retornar o maior número presente no array.

const numeros = [123, 14, 16, 18, 99]
let maiorNumero = 0

function encontrarMaiorNumero(){
    for (let i = 0; i <numeros.length; i++)
        if (numeros[i] > maiorNumero){
            maiorNumero = numeros[i]
        }
    console.log(maiorNumero)
}

encontrarMaiorNumero(numeros)