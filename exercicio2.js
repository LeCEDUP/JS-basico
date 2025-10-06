// Exercício 2: Array e Loop - Soma de Elementos Pares
// Descrição:
// Crie uma função chamada `somarPares` que recebe um array de números inteiros como argumento. A função deve retornar a soma de todos os números pares presentes no array.
// Exemplo de Entrada:
// ```javascript
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
const numeros2 = [1, 2, 3, 80, 5, 6, 7, 8, 9, 10]

function somarPares(numeros){
    soma = 0

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            soma += numeros[i]
        }
    }
    return soma
}

console.log(`Soma de todos os números pares: ${somarPares(numeros2)}`)