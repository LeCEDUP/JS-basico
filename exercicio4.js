// Exercício 4: Funções e Strings - Contador de Vogais
// Crie uma função chamada `contarVogais` que recebe uma string como argumento. 
// A função deve retornar o número total de vogais (a, e, i, o, u), tanto maiúsculas quanto minúsculas, presentes na string.

// Exemplo de Entrada
//javascript
//const texto = "Hello World! Programando em JavaScript.";

// Exemplo de Saída Esperada
//javascript
//11 // (e, o, o, o, a, a, o, e, a, a, i)

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

const texto1 = "Hello World! Programando em JavaScript.";
const resultado1 = contarVogais(texto1);
console.log(resultado1);