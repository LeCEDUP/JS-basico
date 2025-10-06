function encontrarProdutoMaisCaro(arrayDeProdutos) {
    
    let produtoMaisCaroAteAgora = null;

    for (const produto of arrayDeProdutos) {
        if(produtoMaisCaroAteAgora === null){
            produtoMaisCaroAteAgora = produto;
        }
    }
    return produtoMaisCaroAteAgora;

}

const listaDeProdutos = [
    {nome: "Teclado Mecânico", preco: 350 },
    {nome: "Monitor Ultrawide", preco: 1500 },
    {nome: "Mouse Gamer", preco: 120 },
    {nome: "Webcam Full HD", preco: 200 }
];

const produtoVencedor = encontrarProdutoMaisCaro(listaDeProdutos);

console.log("O produto mais caro encontrado foi: ");
console.log(produtoVencedor);