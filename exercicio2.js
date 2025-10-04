function somarPares(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      soma += numeros[i];
    }
  }
  return soma;
}

//toma ai mais um exemplo de uso✌
const numeros = [1, 2, 3, 4, 5, 6];
console.log(somarPares(numeros)); //vai ser 12, resultado de: (2 + 4 + 6)


//Exercício 2: Array e Loop - Soma de Elementos Pares
    //Descrição
    //Crie uma função chamada `somarPares` que recebe um array de números inteiros como argumento. 
    // A função deve retornar a soma de todos os números pares presentes no array.
