# Exercícios de JavaScript para Pythonistas

## Como fazer o Pull Request?

Para resolver estes exercícios, você deve criar um **Pull Request (PR)** diretamente no repositório, sem a necessidade de fazer um fork. Siga os passos abaixo:

1. **Clone o repositório** (se ainda não tiver clonado):

   ```bash
   git clone https://github.com/Alicite/exercicios_js_pythonistas.git
   cd exercicios_js_pythonistas
   ```

2. **Crie uma nova branch** para a sua alteração:

   ```bash
   git checkout -b TURMA-seu-nome
   ```

3. **Faça as modificações necessárias** no código ou na documentação.

4. **Adicione e faça commit das alterações:**

   ```bash
   git add .
   git commit -m "Descrição clara da alteração"
   ```

5. **Envie a branch para o repositório remoto:**

   ```bash
   git push origin TURMA-seu-nome
   ```

6. **Abra um Pull Request:**

   * Vá até a página do repositório no GitHub.
   * Clique em **Compare & pull request**.
   * Descreva suas alterações e envie o PR.

---

## Exercício 1: Variáveis e Tipos de Dados

**Objetivo:** Praticar a declaração de variáveis com `let` e `const` e identificar tipos de dados em JavaScript.

1. Declare uma variável `nome` usando `let` e atribua a ela o seu nome.

1. Declare uma constante `anoNascimento` usando `const` e atribua a ela o seu ano de nascimento.

1. Calcule a sua idade e armazene-a em uma variável `idade` usando `let`.

1. Declare uma variável `isEstudante` e atribua a ela um valor booleano (`true` ou `false`).

1. Imprima no console o valor e o tipo de cada uma dessas variáveis usando `console.log()` e o operador `typeof`.

**Exemplo de Saída Esperada:**

```
Nome: [Seu Nome] (string)
Ano de Nascimento: [Seu Ano] (number)
Idade: [Sua Idade] (number)
É Estudante: [true/false] (boolean)
```

## Exercício 2: Operadores e Condicionais

**Objetivo:** Utilizar operadores aritméticos, de comparação e lógicos, e estruturas condicionais (`if/else if/else`).

1. Crie duas variáveis `num1` e `num2` com valores numéricos de sua escolha.

1. Realize as quatro operações aritméticas básicas (`+`, `-`, `*`, `/`) entre `num1` e `num2` e imprima os resultados.

1. Verifique se `num1` é maior que `num2` e imprima o resultado.

1. Verifique se `num1` é igual a `num2` usando o operador de igualdade estrita (`===`) e imprima o resultado.

1. Crie uma variável `nota` e atribua a ela um valor entre 0 e 100.

1. Usando `if/else if/else`, imprima a classificação da nota:
  - 90-100: "A"
  - 80-89: "B"
  - 70-79: "C"
  - 60-69: "D"
  - Abaixo de 60: "F"

## Exercício 3: Loops

**Objetivo:** Praticar o uso de loops `for` e `while`.

1. Use um loop `for` para imprimir os números de 1 a 10.

1. Use um loop `while` para imprimir os números pares de 0 a 20.

1. Crie um array de nomes. Use um loop `for...of` para imprimir cada nome no console.

1. Crie um objeto com algumas propriedades (nome, idade, cidade). Use um loop `for...in` para imprimir cada chave e seu respectivo valor.

## Exercício 4: Funções

**Objetivo:** Criar e utilizar funções, incluindo parâmetros e retorno de valores.

1. Crie uma função chamada `somar` que receba dois números como parâmetros e retorne a soma deles.

1. Crie uma função chamada `saudacao` que receba um nome como parâmetro e imprima "Olá, [nome]!" no console. Use um parâmetro padrão para o nome caso nenhum seja fornecido.

1. Crie uma função `ehPar` que receba um número e retorne `true` se for par e `false` se for ímpar.

1. Crie uma função de alta ordem `aplicarOperacao` que receba uma função (callback) e dois números. Ela deve executar a função callback com os dois números e retornar o resultado.

## Exercício 5: Arrays e Objetos

**Objetivo:** Manipular arrays e objetos, adicionando, removendo e acessando elementos.

1. Crie um array chamado `cores` com pelo menos 3 cores.

1. Adicione uma nova cor ao final do array.

1. Remova a primeira cor do array.

1. Imprima o array resultante.

1. Crie um objeto `livro` com as propriedades `titulo`, `autor` e `anoPublicacao`.

1. Adicione uma nova propriedade `genero` ao objeto `livro`.

1. Imprima o `titulo` e o `autor` do livro.

1. Use `Object.keys()` e `Object.values()` para imprimir as chaves e os valores do objeto `livro`.

## Exercício 6: Manipulação Básica do DOM (Apenas para ambiente de navegador)

**Objetivo:** Entender como selecionar e modificar elementos HTML usando JavaScript.

**Instruções:** Crie um arquivo `index.html` e um arquivo `script.js` na mesma pasta. Abra o `index.html` no seu navegador e veja as mudanças.

**`index.html`****:**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício DOM</title>
    <style>
        .destaque {
            color: purple;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1 id="titulo-dom">Bem-vindo ao Exercício de DOM!</h1>
    <p class="texto-paragrafo">Este é um parágrafo inicial.</p>
    <button id="botao-mudar-texto">Mudar Texto</button>
    <div id="container-novo-elemento"></div>

    <script src="script.js"></script>
</body>
</html>
```

**`script.js`****:**

```javascript
// script.js

// 1. Selecione o elemento h1 pelo seu ID e mude seu textContent para "DOM Manipulado!".

// 2. Selecione o parágrafo pela sua classe e adicione a classe CSS "destaque" a ele.

// 3. Selecione o botão pelo seu ID. Adicione um event listener de 'click' a ele.
//    Quando o botão for clicado, mude o textContent do parágrafo para "Texto alterado pelo clique!".

// 4. Crie um novo elemento <p> com o textContent "Este é um novo parágrafo criado via JS!".
//    Adicione este novo parágrafo ao elemento <div> com o ID "container-novo-elemento".
```
