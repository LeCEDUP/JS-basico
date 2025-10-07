function encontrarMaxNumero(array) {
  if (array.length === 0) {
    return null;
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
console.log(encontrarMaxNumero(numeros));