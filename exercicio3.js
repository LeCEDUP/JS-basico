/*## Exercício 3: Objeto e Condicionais - Verificador de Status de Aluno

### Descrição
Crie uma função chamada `verificarStatusAluno` que recebe um objeto representando um aluno. O objeto `aluno` terá as propriedades `nome` (string) e `nota` (number).

A função deve retornar uma string indicando o status do aluno de acordo com as seguintes regras:
*   Se a `nota` for maior ou igual a 7, o status é "Aprovado".
*   Se a `nota` for maior ou igual a 5 e menor que 7, o status é "Recuperação".
*   Se a `nota` for menor que 5, o status é "Reprovado".

### Exemplo de Saída Esperada
```javascript
"Maria: Aprovado"
"João: Recuperação"
"Ana: Reprovado"
```

### Dicas
*   Acesse as propriedades do objeto usando a notação de ponto (`aluno.nome`) ou colchetes (`aluno['nota']`).
*   Utilize estruturas condicionais `if`, `else if` e `else` para determinar o status.
*   Concatene as strings para formar a mensagem de saída.

---*/

const aluno1 = { nome: "Jeovana", nota: 10 };
const aluno2 = { nome: "Julia", nota: 5.5 };
const aluno3 = { nome: "Lulu", nota: 3.0 };
const aluno4 = { }

function verificarStatusAluno(aluno) {
    let status;
    if(aluno.nota >= 7) {
        status = "Aprovado";
    }
    else if(aluno.nota >= 5 && aluno.nota < 7) {
        status = "Recuperação";
    }
    else if(aluno.nota < 5) {
        status = "Reprovado";
    }
    else {status = "Nota inválida";}
    return  `Condição do ${aluno.nome},será: ${status}`;
}

  


console.log(verificarStatusAluno(aluno1));
console.log(verificarStatusAluno(aluno2));
console.log(verificarStatusAluno(aluno3));
console.log (verificarStatusAluno(aluno4));
