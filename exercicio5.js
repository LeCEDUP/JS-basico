function encontrarProdutoMaisCaro(produtos) {
    if (produtos.length === 0) {
        return null; 
    }
    let produtoMaisCaro = produtos[0];
    for (let i = 1; i < produtos.length; i++) {
        if (produtos[i].preco > produtoMaisCaro.preco) {
            produtoMaisCaro = produtos[i];
        }
    }
    return produtoMaisCaro;
}

const listaDeProdutos = [
    { nome: "iphone 16 ", preco: 12.499 },
    { nome: "esmalte", preco: 7 },
    { nome: "Dyson", preco: 6.600 }
];
const produtoMaisCaro = encontrarProdutoMaisCaro(listaDeProdutos);
console.log(produtoMaisCaro); 