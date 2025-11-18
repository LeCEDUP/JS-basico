const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somarPares = (array) => {
        let somatoria;
        if (array.length !== 0) {
                somatoria = 0;
                for (let numero of array) {
                        if (numero % 2 === 0) {
                                somatoria += numero;
                        }
                }
        } else {
                console.log(`${array} é uma array vazia!`);
        }
        return somatoria;
}

console.log(somarPares(numeros));
