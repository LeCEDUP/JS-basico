// Exercício 2: Array e Loop - Soma de Elementos Pares
// Crie uma função chamada `somarPares` que recebe um array de números inteiros como argumento. 
// A função deve retornar a soma de todos os números pares presentes no array.

// Exemplo de Entrada
//javascript
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exemplo de Saída Esperada
//javascript
//30 // (2 + 4 + 6 + 8 + 10)

// Dicas
// Use um loop `for` para iterar sobre cada elemento do array.
// Dentro do loop, utilize uma estrutura condicional (`if`) para verificar se o número é par.
// Mantenha uma variável acumuladora para somar os números pares encontrados.

function somarPares(numeros) {
  let soma = 0;

  for (const numero of numeros) {
    if (numero % 2 === 0) {
      soma += numero;
    }
  }

  return soma;
}

// // --- Exemplo de Uso ---
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultado = somarPares(numeros);
// console.log(resultado); // Saída: 30

// const outrosNumeros = [1, 3, 5, 7, 9];
// const resultadoImpares = somarPares(outrosNumeros);
// console.log(resultadoImpares); // Saída: 0

// const numerosMistos = [2, 11, 4, 1, 6];
// const resultadoMistos = somarPares(numerosMistos);
// console.log(resultadoMistos); // Saída: 12 (2 + 4 + 6)

// const arrayVazio = [];
// const resultadoVazio = somarPares(arrayVazio);
// console.log(resultadoVazio); // Saída: 0