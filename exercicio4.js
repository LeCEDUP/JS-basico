/*## Exercício 4: Funções e Strings - Contador de Vogais

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

---*/



// Exercício 4: Funções e Strings - Contador de Vogais

function contarVogais(frase) {
    let num = 0;
    let listaVogais = [];

    let minusculas = frase.toLowerCase();

    for (let i = 0; i < minusculas.length; i++) {
        let letra = minusculas[i];

        if ("aeiou".includes(letra)) {
            num++;
            listaVogais.push(letra);
        }
    }

    return num;
}

let frase = "Faltam 82 dias para o natal";
let resultado = contarVogais(frase);

console.log(`Número de vogais: ${resultado}`);
