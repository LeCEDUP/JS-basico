// Exercício 3: Objeto e Condicionais - Verificador de Status de Aluno
// Crie uma função chamada `verificarStatusAluno` que recebe um objeto representando um aluno. 
// O objeto `aluno` terá as propriedades `nome` (string) e `nota` (number).

// A função deve retornar uma string indicando o status do aluno de acordo com as seguintes regras:
// Se a `nota` for maior ou igual a 7, o status é "Aprovado".
// Se a `nota` for maior ou igual a 5 e menor que 7, o status é "Recuperação".
// Se a `nota` for menor que 5, o status é "Reprovado".

// Exemplo de Entrada
//javascript
//const aluno1 = { nome: "Maria", nota: 8.5 };
//const aluno2 = { nome: "João", nota: 6.0 };
//const aluno3 = { nome: "Ana", nota: 4.0 };

// Exemplo de Saída Esperada
//javascript
//"Maria: Aprovado"
//"João: Recuperação"
//"Ana: Reprovado"

// Dicas
// Acesse as propriedades do objeto usando a notação de ponto (`aluno.nome`) ou colchetes (`aluno['nota']`).
// Utilize estruturas condicionais `if`, `else if` e `else` para determinar o status.
// Concatene as strings para formar a mensagem de saída.