const aluno1 = {nome: "Maria", nota: 8.5};
const aluno2 = {nome: "João", nota: 6.0};
const aluno3 = {nome: "Ana", nota: 4.0};

const verificarStatusAluno = (aluno) => {
        if (10 >= aluno.nota && aluno.nota >= 7) {
                return `${aluno.nome}: Aprovado`;
        } else if (6 >= aluno.nota && aluno.nota >= 5) {
                return `${aluno.nome}: Recuperação`;
        } else if (4 >= aluno.nota && aluno.nota >= 0) {
                return `${aluno.nome}: Reprovado`
        } else {
                return `Erro!`;
        }
}

console.log(verificarStatusAluno(aluno1));
console.log(verificarStatusAluno(aluno2));
console.log(verificarStatusAluno(aluno3));
