function Aluno(aluno) {
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


const aluno1 = { nome: "Jorge", nota: 8.5 };
const aluno2 = { nome: "Mario", nota: 6.0 };
const aluno3 = { nome: "Luiza", nota: 4.0 };
''

console.log(Aluno(aluno1)); // "Jorge: Aprovado"
console.log(Aluno(aluno2)); // "Mario: Recuperação"
console.log(Aluno(aluno3)); // "Luiza: Reprovado"
   24 changes: 24 additions & 0 deletions24  
exercicio4.js 
