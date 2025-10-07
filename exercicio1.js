// ## Exercício 1: Array e Loop - Encontrar o Maior Número

// ### Descrição
// Crie uma função chamada `encontrarMaiorNumero` que recebe um array de números como argumento. A função deve retornar o maior número presente no array.

// ### Exemplo de Entrada
// ```javascript
// const numeros = [15, 8, 23, 4, 42, 16];
// ```

// ### Exemplo de Saída Esperada
// ```javascript
// 42
// ```

// ### Dicas
// *   Inicialize uma variável para armazenar o maior número encontrado até o momento.
// *   Use um loop `for` para iterar sobre cada elemento do array.
// *   Dentro do loop, utilize uma estrutura condicional (`if`) para comparar o número atual com o maior número armazenado. Se o número atual for maior, atualize a variável.
//   Lembre-se de lidar com o caso de um array vazio.

function encontrarMaiorNumero(array) {
    if (array.length === 0) {
        return "Array vazio!";
    }

    let maior = array[0];


    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; 
        }
    }

    return maior;
}

const numeros = [15, 8, 23, 4, 42, 16];
console.log(encontrarMaiorNumero(numeros));