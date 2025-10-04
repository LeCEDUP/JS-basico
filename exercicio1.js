function encontrarMaiorNumero(numeros) {
  if (numeros.length === 0) {
    return null;
  }

  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  
  return maior;
}


// toma um exemplo de uso ai✌
const numeros = [15, 8, 23, 4, 42, 16];
console.log(encontrarMaiorNumero(numeros)); // 42 maior resultado, logo ele q deve aparecer


//## Exercício 1: Array e Loop - Encontrar o Maior Número

//### Descrição
//Crie uma função chamada `encontrarMaiorNumero` que recebe um array de números como argumento. A função deve retornar o maior número presente no array.

//### Exemplo de Entrada
//```javascript
//const numeros = [15, 8, 23, 4, 42, 16];
//javascript
//const numeros = [15, 8, 23, 4, 42, 16];