function contaVogais(texto) {
    let contador = 0;
    const vogais = "aeiouAEIOU";

    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])){
            contador++;
        }
    }

    return contador
}
const texto = "Hello World! Programando em JavaScript.";

console.log(contaVogais(texto))