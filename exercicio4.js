// Exercício 4: Funções e Strings - Contador de Vogais

// Descrição:
// Crie uma função chamada `contarVogais` que recebe uma string como argumento. A função deve retornar o número total de vogais (a, e, i, o, u), tanto maiúsculas quanto minúsculas, presentes na string.

// Exemplo de Entrada:
// ```javascript
// const texto = "Hello World! Programando em JavaScript.";
// ```

// Exemplo de Saída Esperada:
// ```javascript
// 10 // (e, o, o, a, o, a, o, e, i, a)
// ```

let frase = "O Miguel vadio"
let num = 0
let listaVogais = []

function contarVogais(Afrase){
    let minusculas = Afrase.toLowerCase() 

    for (i = 0; i <frase.length+1; i++){

        if (minusculas[i] === "a"){
            num += 1,
            listaVogais.push(` ${minusculas[i]}`)
        }

        if (minusculas[i] === "e"){
            num += 1,
            listaVogais.push(` ${minusculas[i]}`)
        }

        if (minusculas[i] === "i"){
            num += 1,
            listaVogais.push(` ${minusculas[i]}`)
        }

        if (minusculas[i] === "o"){
            num += 1,
            listaVogais.push(` ${minusculas[i]}`)
        }

        if (minusculas[i] === "u"){
            num += 1,
            listaVogais.push(` ${minusculas[i]}`)
        }
    }
    return num
}

console.log(`A frase: "${frase}" possui:
    Número de vogais: ${contarVogais(frase)}.
    Lista de vogais: ${listaVogais}`)