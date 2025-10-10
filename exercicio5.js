// Dada uma lista de objetos representando produtos, onde cada produto possui nome 
// (string) e preco (number), crie uma função chamada encontrarProdutoMaisCaro.

// A função deve receber um array de objetos de produto e retornar o objeto do
//  produto que possui o maior preço.

// const encontrarProdutoMaisCaro = (arrayProdutos) => {
//     if (arrayProdutos.length === 0) {
//         return NaN;
//     }

//     let produtoMaisCaro = arrayProdutos[0];

//     for (produto of produtos) {
//         if (produto.preco > produtoMaisCaro.preco) {
//             produtoMaisCaro = produto;
//         }
//     }

//     return produtoMaisCaro;
// }

const encontrarProdutoMaisCaro = (arrayProdutos) => arrayProdutos
    .reduce((maior, atual) => atual.preco > maior.preco ? atual : maior);

const produtos = [
    { nome: "Teclado Mecânico", preco: 350 },
    { nome: "Monitor Ultrawide", preco: 1500 },
    { nome: "Mouse Gamer", preco: 12000 },
    { nome: "Webcam Full HD", preco: 200 }
];

console.log(encontrarProdutoMaisCaro(produtos));