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

// ### Dicas
// *   Inicialize uma variável para armazenar o produto mais caro encontrado até o momento.
// *   Use um loop `for` para percorrer o array de produtos.
// *   Dentro do loop, compare o preço do produto atual com o preço do produto mais caro armazenado. Se o produto atual for mais caro, atualize a variável.
// *   Lembre-se de lidar com o caso de um array vazio.

const produtos = [
    {nome:"Teclado Mecânico", preco: 350 },
    {nome:"Monitor Ultrawide", preco: 1500},
    {nome:"Mouse Gamer", preco: 120},
    {nome:"Webcam Full HD", preco: 200}
];

function encontrarProdutoMaisCaro(produtos) {
    let produtoMaisCaro = produtos[0]

    for (let i of produtos) {
        if (i.preco > produtoMaisCaro.preco) {
            produtoMaisCaro = i;
        }
    }

    return produtoMaisCaro;
}

console.log(encontrarProdutoMaisCaro(produtos));