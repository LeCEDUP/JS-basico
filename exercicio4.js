// Exercício 4: Funções e Strings - Contador de Vogais
// Crie uma função chamada `contarVogais` que recebe uma string como argumento. 
// A função deve retornar o número total de vogais (a, e, i, o, u), tanto maiúsculas quanto minúsculas, presentes na string.

// Exemplo de Entrada
//javascript
//const texto = "Hello World! Programando em JavaScript.";

// Exemplo de Saída Esperada
//javascript
//10 // (e, o, o, a, o, a, o, e, i, a)

// Dicas
// Use um loop `for` para iterar sobre cada caractere da string.
// Dentro do loop, use uma estrutura condicional para verificar se o caractere atual é uma vogal.
// Mantenha uma variável para contar as vogais.

function contarVogais(texto) {
  let contador = 0;
  const vogais = "aeiouAEIOU";

  for (const caractere of texto) {
    if (vogais.includes(caractere)) {
      contador++;
    }
  }

  return contador;
}

// // --- Exemplo de Uso ---
// const texto1 = "Hello World! Programando em JavaScript.";
// const resultado1 = contarVogais(texto1);
// console.log(resultado1); // Saída: 10

// const texto2 = "Rato roeu a roupa do rei de Roma";
// const resultado2 = contarVogais(texto2);
// console.log(resultado2); // Saída: 12

// const texto3 = "XYZ";
// const resultado3 = contarVogais(texto3);
// console.log(resultado3); // Saída: 0

// const texto4 = "";
// const resultado4 = contarVogais(texto4);
// console.log(resultado4); // Saída: 0