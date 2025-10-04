// ## Exercício 5: Array de Objetos e Loop - Encontrar o Produto Mais Caro

const produtos = [
     { nome: "Teclado Mecânico", preco: 350 },
     { nome: "rgb", preco: 100 },
     { nome: "swith marrom", preco: 1501 },
     { nome: "Webcam Full HD", preco: 200 }]

function encontrarProdutoMaisCaro(array) {
    let maisCaro = array[0]
    for (i=1; i < array.length; i++) {
        if (maisCaro.preco < array[i].preco) {
            maisCaro = array[i]
        }
    }
    return maisCaro.preco
}

console.log(`O produto mais caro da lista é ${maisCaro.nome} com o preço de ${encontrarProdutoMaisCaro(produtos)}`)