// ## Exercício 4: Funções e Strings - Contador de Vogais

const frase = "O PeDRO NaO FaZ NADA"
let listaDeVogais = []
let numeroDeVogal = 0

function contarVogais(frases){
    
    for (i = 0; i < frases.length; i++) {
        let fraseNova = frases.toLowerCase()
        if (fraseNova[i] === "a") {
            numeroDeVogal += 1
            listaDeVogais.push(frases[i])
        }

        if (fraseNova[i] === "e") {
            numeroDeVogal += 1
            listaDeVogais.push(frases[i])
        }

        if (fraseNova[i] === "i") {
            numeroDeVogal += 1
            listaDeVogais.push(frases[i])
        }

        if (fraseNova[i] === "o") {
            numeroDeVogal += 1
            listaDeVogais.push(frases[i])
        }

        if (fraseNova[i] === "u") {
            numeroDeVogal += 1
            listaDeVogais.push(frases[i])
        }

      
    }
    return numeroDeVogal
}
console.log(`A frase é: ${frase}
O numero de vogais nela é: ${contarVogais(frase)}
Lista das vogais: ${listaDeVogais}`)
