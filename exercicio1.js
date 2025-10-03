function encontrarMaiorNumero(num) {
  if (num.length === 0) {
    return null; 
  }

  let maior = num[0];

  for (let i = 1; i < num.length; i++) {
    if (num[i] > maior) {
      maior = num[i];
    }
  }

  return maior;
}


const num = [15, 8, 23, 4, 42, 16];
console.log(encontrarMaiorNumero(num));