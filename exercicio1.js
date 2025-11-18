function encontrarMaiorNumero(numeros) {
    if (numeros.length === 0) {
        return null; 
    }
    let maiorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    return maiorNumero;
}

const numerosArray = [3, 5, 7, 2, 8, 1];
const maiorNumero = encontrarMaiorNumero(numerosArray);
console.log("O maior número é:", maiorNumero); 