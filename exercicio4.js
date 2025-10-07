// ## Exercício 4: Funções e Strings - Contador de Vogais

// ### Descrição
// Crie uma função chamada `contarVogais` que recebe uma string como argumento. A função deve retornar o número total de vogais (a, e, i, o, u), tanto maiúsculas quanto minúsculas, presentes na string.

// ### Exemplo de Entrada
// ```javascript
// const texto = "Hello World! Programando em JavaScript.";
// ```

// ### Exemplo de Saída Esperada
// ```javascript
// 10 // (e, o, o, a, o, a, o, e, i, a)
// ```

// ### Dicas
// *   Use um loop `for` para iterar sobre cada caractere da string.
// *   Dentro do loop, use uma estrutura condicional para verificar se o caractere atual é uma vogal.
// *   Mantenha uma variável para contar as vogais.



function contarVogais(texto) {
 
    let contador = 0;

   
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase(); 

        if (letra === 'a') {
            contador++;
        } else if (letra === 'e') {
            contador++;
        } else if (letra === 'i') {
            contador++;
        } else if (letra === 'o') {
            contador++;
        } else if (letra === 'u') {
            contador++;
        }
    }

    return contador;
}

const texto = "Hello World! Programando em JavaScript.";
console.log(contarVogais(texto));

