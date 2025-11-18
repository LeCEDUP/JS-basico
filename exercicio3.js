function verificarStatusAluno(aluno) {
    if (aluno.nota >= 7) {
        return "Aprovado";
    } else if (aluno.nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

const aluno = { nome: "Júlia Amorim", nota: 4 };
console.log(`${aluno.nome} está: ${verificarStatusAluno(aluno)}`);

