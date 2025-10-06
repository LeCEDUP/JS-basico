//ex2 fiz basicamente igual ao ex1 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somarPares(arrayDeNumeros) {
    let soma = 0;

    for (const i of arrayDeNumeros) {

        if (i % 2 === 0) {
            soma = soma + i;
        }

    }
    return soma
}

const resultado = somarPares(numeros);
console.log(`O resultado da soma dos números pares é: ${resultado}`)