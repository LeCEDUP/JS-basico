const produtos = [
        { nome: "Teclado Mecânico", preco: 350 },
        { nome: "Monitor Ultrawide", preco: 1500 },
        { nome: "Computador Quântico", preco: 10000000 },
        { nome: "Mouse Gamer", preco: 120 },
        { nome: "Webcam Full HD", preco: 200 }
];

const encontrarProdutoMaisCaro = (produtos) => {
        let maiorPreco = 0;

        if (produtos.length !== 0) {
                for (let produto of produtos) {
                        if (produto.preco > maiorPreco) {
                                maiorPreco = produto.preco;
                        } 
                }
                for (let produto of produtos) {
                        if (produto.preco === maiorPreco) {
                                return produto;
                        }
                }
        } else {
                return `Nenhum produto encontrado.`
        }
}

console.log(encontrarProdutoMaisCaro(produtos));
