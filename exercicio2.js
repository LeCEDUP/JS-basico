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

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = somarPares(numeros);
console.log(resultado);