function verificarStatusAluno(aluno) {
  if (aluno.nota >= 7) {
    return "aprovado👍";
  } else if (aluno.nota >= 5) {
    return "vai ficar de exame";
  } else {
    return "REPROVADOO";
  }
}

//toma ai outro exemplo de uso✌
const aluno1 = { nome: "caio da paola", nota: 8 };
console.log(verificarStatusAluno(aluno1)); //aprovado👍

const aluno2 = { nome: "", nota: 6 };
console.log(verificarStatusAluno(aluno2)); //vai ficar de exame

const aluno3 = { nome: "Pedro", nota: 4 };
console.log(verificarStatusAluno(aluno3)); //rereprovado


//## Exercício 3: Objeto e Condicionais - Verificador de Status de Aluno

// Descrição
//Crie uma função chamada `verificarStatusAluno` que recebe um objeto representando um aluno. O objeto `aluno` terá as propriedades `nome` (string) e `nota` (number).
//A função deve retornar uma string indicando o status do aluno de acordo com as seguintes regras:
 //Se a `nota` for maior ou igual a 7, o status é "Aprovado".
//Se a `nota` for maior ou igual a 5 e menor que 7, o status é "Recuperação".
//Se a `nota` for menor que 5, o status é "Reprovado".