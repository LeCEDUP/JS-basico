// ## Exercício 5: Array de Objetos e Loop - Encontrar o Produto Mais Caro

// ### Descrição
// Dada uma lista de objetos representando produtos, onde cada produto possui `nome` (string) e `preco` (number), crie uma função chamada `encontrarProdutoMaisCaro`.

// A função deve receber um array de objetos de produto e retornar o objeto do produto que possui o maior preço.

// ### Exemplo de Entrada
// ```javascript
// const produtos = [
//     { nome: "Teclado Mecânico", preco: 350 },
//     { nome: "Monitor Ultrawide", preco: 1500 },
//     { nome: "Mouse Gamer", preco: 120 },
//     { nome: "Webcam Full HD", preco: 200 }
// ];
// ```

// ### Exemplo de Saída Esperada
// ```javascript
// { nome: "Monitor Ultrawide", preco: 1500 }
// ```


const produtos = [
    { nome: "Teclado Mecânico", preco: 350 },
    { nome: "Monitor Ultrawide", preco: 1500 },
    { nome: "Mouse Gamer", preco: 120 },
    { nome: "Webcam Full HD", preco: 200 }];


function encontrarProdutoMaisCaro(){

    let maisCaro = produtos[0]

    for (i = 0; i < produtos.length; i++){
        if (produtos[i].preco > maisCaro.preco){
            maisCaro = produtos[i]
        }
    }
    return maisCaro
}

console.log(`O produto mais caro é: [${encontrarProdutoMaisCaro(produtos).nome}, custando R$${encontrarProdutoMaisCaro(produtos).preco}]`)