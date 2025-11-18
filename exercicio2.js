function somarPares(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            soma += numeros[i];
        }
    }
    return soma;
}
const numerosArray = [4, 5, 7, 2, 8, 10];
const somaPares = somarPares(numerosArray);
console.log("A soma dos números pares é:", somaPares);
