// Exercício 3: Objeto e Condicionais - Verificador de Status de Aluno

// Descrição:
// Crie uma função chamada `verificarStatusAluno` que recebe um objeto representando um aluno. O objeto `aluno` terá as propriedades `nome` (string) e `nota` (number).

// A função deve retornar uma string indicando o status do aluno de acordo com as seguintes regras:
// *   Se a `nota` for maior ou igual a 7, o status é "Aprovado".
// *   Se a `nota` for maior ou igual a 5 e menor que 7, o status é "Recuperação".
// *   Se a `nota` for menor que 5, o status é "Reprovado".

// Exemplo de Entrada
// ```javascript
// const aluno1 = { nome: "Maria", nota: 8.5 };
// const aluno2 = { nome: "João", nota: 6.0 };
// const aluno3 = { nome: "Ana", nota: 4.0 };
// ```


let aluno = {
    nome: "Leandro",
    nota: 9.15
}


function verificarStatusAluno(){
    console.log(`Aluno(a): ${aluno.nome}`)
    console.log(`Nota: ${aluno.nota}`)
    console.log 

    if (aluno.nota >= 7){
        return `O aluno(a) ${aluno.nome} está APROVADO!` 
    }
    else if (aluno.nota >= 5 && aluno.nota < 7){
        return `O aluno(a) ${aluno} está em RECUPERAÇÃO!`
    }
    else{
        return `O aluno(a) ${aluno} está em REPROVADO!`
    }
    console.log()
}

console.log(verificarStatusAluno(aluno))