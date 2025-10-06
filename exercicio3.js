//ex3 nesse exercicio aprendi mais sobre let e const nao estava muito fixo para mim mas eu vi um jeito de entender mais facil, let pode ser uma varievel vazia, a const nao
const aluno1 = { nome: "Maria", nota: 8.5 };
const aluno2 = { nome: "João", nota: 6.0 };
const aluno3 = { nome: "Ana", nota: 4.0 };

function verificarStatusAluno(aluno){
    const nomeDoAluno = aluno.nome;
    const notaDoAluno = aluno.nota;
    
    let situacao = null;

    if (notaDoAluno >= 7){
         situacao = "Aprovado"
    }
    else {
        situacao = "Reprovado"
    }

    const mensagemFinal = (`${nomeDoAluno}: ${situacao}`);
    return mensagemFinal
}

const situacaoAluno1 = verificarStatusAluno(aluno1);
console.log(situacaoAluno1); 

const situacaoAluno2 = verificarStatusAluno(aluno2);
console.log(situacaoAluno2); 

const situacaoAluno3 = verificarStatusAluno(aluno3);
console.log(situacaoAluno3); 