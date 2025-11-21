const numeros = [15, 8, 23, 4, 42, 16];

const encontrarMaiorNumero = (array) => {
        let maiorNumero;
        if (array.length !== 0) {
                maiorNumero = array[0];
                for (let numero of array) {
                        if (numero > maiorNumero) {
                                maiorNumero = numero
                        }
                }
        } else {
                console.log(`${array} é uma array vazia!`);
        }
        return maiorNumero;
}

console.log(encontrarMaiorNumero(numeros));
