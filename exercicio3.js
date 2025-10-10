const verificarStatusAluno = (alunoObj) => {
    // let situacao = "Indefinido";
    // if (alunoObj.nota > 7) {
    //     situacao = "Aprovado"
    // } else if (alunoObj.nota > 5) {
    //     situacao = "Recuperação"
    // } else {
    //     situacao = "Reprovado"
    // }

    return `${alunoObj.nome}: ${alunoObj.nota > 7 ?
         "Aprovado" : alunoObj.nota > 5 ? "Recuperação" : "Reprovado"}!`
}

const aluno1 = { nome: "Mariaaaaaaa", nota: 8.5 };
const aluno2 = { nome: "João", nota: 6.0 };
const aluno3 = { nome: "Ana", nota: 4.0 };

console.log(verificarStatusAluno(aluno1))
console.log(verificarStatusAluno(aluno2))
console.log(verificarStatusAluno(aluno3))