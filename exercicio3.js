function verificarStatusAluno(aluno) {
  let status;

  if (aluno.nota >= 7) {
    status = "Aprovado";
  } else if (aluno.nota >= 5) {
    status = "Recuperação";
  } else {
    status = "Reprovado";
  }

  return `${aluno.nome}: ${status}`;
}

// Testes com os exemplos fornecidos
const aluno1 = { nome: "Maria", nota: 8.5 };
const aluno2 = { nome: "João", nota: 6.0 };
const aluno3 = { nome: "Ana", nota: 4.0 };

console.log(verificarStatusAluno(aluno1)); // "Maria: Aprovado"
console.log(verificarStatusAluno(aluno2)); // "João: Recuperação"
console.log(verificarStatusAluno(aluno3));