// ## Exercício 2: Array e Loop - Soma de Elementos Pares

// ### Descrição
// Crie uma função chamada `somarPares` que recebe um array de números inteiros como argumento. A função deve retornar a soma de todos os números pares presentes no array.

// ### Exemplo de Entrada
// ```javascript
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ```

// ### Exemplo de Saída Esperada
// ```javascript
// 30 // (2 + 4 + 6 + 8 + 10)
// ```

// ### Dicas
// *   Use um loop `for` para iterar sobre cada elemento do array.
// *   Dentro do loop, utilize uma estrutura condicional (`if`) para verificar se o número é par.
// *   Mantenha uma variável acumuladora para somar os números pares encontrados.

// ---

function somarPares(array) {
    let soma = 0; 


    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { 
            soma += array[i]; 
        }
    }

    return soma;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(somarPares(numeros)); 
