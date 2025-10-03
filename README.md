# JS-basico

## Como Fazer um Pull Request

Para solucionar estes exercícios, propor melhorias ou adicionar novos exercícios, siga os passos abaixo para fazer um Pull Request (PR):

1.  **Clone o Repositório**: No seu terminal, clone o repositório para a sua máquina local:
    ```bash
    git clone https://github.com/LeCEDUP/JS-basico.git
    ```

2.  **Crie uma Nova Branch**: Navegue até o diretório do projeto e crie uma nova branch para suas alterações:
    ```bash
    git checkout -b TURMA-seunome
    ```

3.  **Faça Suas Alterações**: Implemente suas soluções, adicione novos exercícios ou faça as melhorias desejadas nos arquivos apropriados.

4.  **Adicione e Commite Suas Alterações**: Após fazer as alterações, adicione os arquivos modificados e faça um commit:
    ```bash
    git add .
    git commit -m "Adiciona solução para o Exercício 1" # Use uma mensagem de commit descritiva
    ```

5.  **Envie Suas Alterações para o GitHub**: Envie sua nova branch para o repositório remoto:
    ```bash
    git push origin nome-da-sua-branch
    ```

6.  **Abra um Pull Request**: Vá até o repositório no GitHub. Você verá um botão "Compare & pull request" ou uma notificação para abrir um Pull Request da sua nova branch. Nomeie o seu PR com `[TURMA] Seu Nome` e envie.

---

## Exercício 1: Array e Loop - Encontrar o Maior Número

### Descrição
Crie uma função chamada `encontrarMaiorNumero` que recebe um array de números como argumento. A função deve retornar o maior número presente no array.

### Exemplo de Entrada
```javascript
const numeros = [15, 8, 23, 4, 42, 16];
```

### Exemplo de Saída Esperada
```javascript
42
```

### Dicas
*   Inicialize uma variável para armazenar o maior número encontrado até o momento.
*   Use um loop `for` para iterar sobre cada elemento do array.
*   Dentro do loop, utilize uma estrutura condicional (`if`) para comparar o número atual com o maior número armazenado. Se o número atual for maior, atualize a variável.
*   Lembre-se de lidar com o caso de um array vazio.

---

## Exercício 2: Array e Loop - Soma de Elementos Pares

### Descrição
Crie uma função chamada `somarPares` que recebe um array de números inteiros como argumento. A função deve retornar a soma de todos os números pares presentes no array.

### Exemplo de Entrada
```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

### Exemplo de Saída Esperada
```javascript
30 // (2 + 4 + 6 + 8 + 10)
```

### Dicas
*   Use um loop `for` para iterar sobre cada elemento do array.
*   Dentro do loop, utilize uma estrutura condicional (`if`) para verificar se o número é par.
*   Mantenha uma variável acumuladora para somar os números pares encontrados.

---

## Exercício 3: Objeto e Condicionais - Verificador de Status de Aluno

### Descrição
Crie uma função chamada `verificarStatusAluno` que recebe um objeto representando um aluno. O objeto `aluno` terá as propriedades `nome` (string) e `nota` (number).

A função deve retornar uma string indicando o status do aluno de acordo com as seguintes regras:
*   Se a `nota` for maior ou igual a 7, o status é "Aprovado".
*   Se a `nota` for maior ou igual a 5 e menor que 7, o status é "Recuperação".
*   Se a `nota` for menor que 5, o status é "Reprovado".

### Exemplo de Entrada
```javascript
const aluno1 = { nome: "Maria", nota: 8.5 };
const aluno2 = { nome: "João", nota: 6.0 };
const aluno3 = { nome: "Ana", nota: 4.0 };
```

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

---

## Exercício 4: Funções e Strings - Contador de Vogais

### Descrição
Crie uma função chamada `contarVogais` que recebe uma string como argumento. A função deve retornar o número total de vogais (a, e, i, o, u), tanto maiúsculas quanto minúsculas, presentes na string.

### Exemplo de Entrada
```javascript
const texto = "Hello World! Programando em JavaScript.";
```

### Exemplo de Saída Esperada
```javascript
10 // (e, o, o, a, o, a, o, e, i, a)
```

### Dicas
*   Use um loop `for` para iterar sobre cada caractere da string.
*   Dentro do loop, use uma estrutura condicional para verificar se o caractere atual é uma vogal.
*   Mantenha uma variável para contar as vogais.

---

## Exercício 5: Array de Objetos e Loop - Encontrar o Produto Mais Caro

### Descrição
Dada uma lista de objetos representando produtos, onde cada produto possui `nome` (string) e `preco` (number), crie uma função chamada `encontrarProdutoMaisCaro`.

A função deve receber um array de objetos de produto e retornar o objeto do produto que possui o maior preço.

### Exemplo de Entrada
```javascript
const produtos = [
    { nome: "Teclado Mecânico", preco: 350 },
    { nome: "Monitor Ultrawide", preco: 1500 },
    { nome: "Mouse Gamer", preco: 120 },
    { nome: "Webcam Full HD", preco: 200 }
];
```

### Exemplo de Saída Esperada
```javascript
{ nome: "Monitor Ultrawide", preco: 1500 }
```

### Dicas
*   Inicialize uma variável para armazenar o produto mais caro encontrado até o momento.
*   Use um loop `for` para percorrer o array de produtos.
*   Dentro do loop, compare o preço do produto atual com o preço do produto mais caro armazenado. Se o produto atual for mais caro, atualize a variável.
*   Lembre-se de lidar com o caso de um array vazio.

---
primeiro comit