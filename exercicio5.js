const produtos = [
  { nome: "Teclado Mecânico", preco: 350 },
  { nome: "Monitor Ultrawide", preco: 1500 },
  { nome: "Mouse Gamer", preco: 120 },
  { nome: "Webcam Full HD", preco: 200 }
];

function encontrarProdutoMaisCaro(produtos) {
  let produtoMaisCaro = produtos[0];

  for (let i of produtos) {
    if (i.preco > produtoMaisCaro.preco) {
      produtoMaisCaro = i;
    }
  }

  return produtoMaisCaro;
}

console.log(encontrarProdutoMaisCaro(produtos));