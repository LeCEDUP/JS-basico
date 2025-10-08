// Crie uma função chamada encontrarMaiorNumero que recebe um array de números como argumento.
// A função deve retornar o maior número presente no array.

// const encontrarMaiorNumero = (arrnum) => {
//     if (arrnum.length === 0){
//         return NaN;
//     }

//     let maior = arrnum[0];

//     for (let i = 1; i < arrnum.length; i++) {
//         if (arrnum[i] > maior) {
//             maior = arrnum[i];
//         }
//     }

//     return maior;
// };


const encontrarMaiorNumero = (arrnum) => {
    return arrnum.reduce((acumulador, atual) => acumulador > atual ? acumulador : atual);
}

const numeros = [-15, 8, 23, 1000, 42, 16];
console.log(encontrarMaiorNumero(numeros))