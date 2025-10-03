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

// ## Exercício 4: Funções e Strings - Contador de Vogais

// ## Exercício 4: Funções e Strings - Contador de Vogais (separado por vogal)

function contarVogais(texto) {
    // Objeto para armazenar a contagem de cada vogal
    let contador = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase(); // ignora maiúsculas/minúsculas
        if (char === "a") contador.a++;
        else if (char === "e") contador.e++;
        else if (char === "i") contador.i++;
        else if (char === "o") contador.o++;
        else if (char === "u") contador.u++;
    }

    // também retorna o total de vogais
    let total = contador.a + contador.e + contador.i + contador.o + contador.u;

    return { ...contador, total };
}

// Exemplo de uso
const texto = "Hello World! Programando em JavaScript.";
console.log(contarVogais(texto));

