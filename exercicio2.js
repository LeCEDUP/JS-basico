// Crie uma função chamada somarPares que recebe um array de números
// inteiros como argumento. A função deve retornar a soma de todos os números
// pares presentes no array.

const somarPares = (arrNum) => arrNum.reduce((acu, atu) => {
    return atu % 2 === 0 ? acu + atu : acu + 0
}, 0);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
console.log(somarPares(numeros))