function somarPares(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      soma += numeros[i];
    }
  }

  return soma;
}

// Teste com o array de exemplo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(somarPares(numeros))