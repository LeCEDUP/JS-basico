    function encontrarProdutoMaisCaro(produtos) {
        if(produtos.length === 0) {
            return null;
        }

        let maisCaro = produtos[0];

        for (let i = 1; i< produtos.length; i++) {
            if (produtos[i].preco > maisCaro.preco){
                maisCaro = produtos[i];
            }
        }
        
        return maisCaro;
    }

    const produtos = [
    { nome: "Teclado Mecânico", preco: 350 },
    { nome: "Monitor Ultrawide", preco: 1500 },
    { nome: "Mouse Gamer", preco: 120 },
    { nome: "Webcam Full HD", preco: 200 }
];

console.log(encontrarProdutoMaisCaro(produtos));