function contarVogais(texto) {
  let contador = 0;
  const vogais = "AEIOUaeiou";
  
  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
      contador++;
    }
  }
  
  return contador;
}

//toma ai OUTRO exemplo de uso✌
console.log(contarVogais("pedro ama a emanuelle blasio")); // vai imprimir


//## Exercício 4: Funções e Strings - Contador de Vogais

//Descrição
//Crie uma função chamada `contarVogais` que recebe uma string como argumento. A função deve retornar o número total de vogais (a, e, i, o, u), tanto maiúsculas quanto minúsculas, presentes na string.
//### Dicas
//  Use um loop `for` para iterar sobre cada caractere da string.
//  Dentro do loop, use uma estrutura condicional para verificar se o caractere atual é uma vogal.
//  Mantenha uma variável para contar as vogais.
