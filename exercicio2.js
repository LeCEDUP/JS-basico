// Exercício 2: Array e Loop - Soma de Elementos Pares
// Descrição:
// Crie uma função chamada `somarPares` que recebe um array de números inteiros como argumento. A função deve retornar a soma de todos os números pares presentes no array.
// Exemplo de Entrada:
// ```javascript
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
soma = 0

function somarPares(){
    for (i = 0; i < numeros.length+1; i++){
        console.log(i)
        if (numeros[i] % 2 === 0){
            soma += i
        }
    }
    console.log(`Soma de todos os números pares: ${soma}`)
}

somarPares(numeros)