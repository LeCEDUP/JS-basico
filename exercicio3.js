// ## Exercício 3: Objeto e Condicionais - Verificador de Status de Aluno

const aluno1 = {
    nome: "Caio",
    nota: 10
}
const aluno2 = {
    nome: "Pedro",
    nota: 3.5
}
const aluno3 = {
    nome: "Niguel",
    nota: 1.5
}
const aluno4 = {
    nome: "Lele",
    nota: 5.5
}

function verificarStatusAluno(aluno) {
    let situacao = ""
    if (aluno.nota >= 7) {
        situacao = "Aprovado"
    } else if (aluno.nota >= 5){
        situacao = "Recuperação"
    } else {
        situacao = "Reprovado"
    }
    return situacao
}

console.log(`A situação do aluno ${aluno1.nome} é: ${verificarStatusAluno(aluno1)}
A situação do aluno ${aluno2.nome} é: ${verificarStatusAluno(aluno2)}
A situação do aluno ${aluno3.nome} é: ${verificarStatusAluno(aluno3)}
A situação do aluno ${aluno4.nome} é: ${verificarStatusAluno(aluno4)}`)