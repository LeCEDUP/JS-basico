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


const produtos = [
  { nome: "Teclado Mecânico", preco: 350 },
  { nome: "Monitor Ultrawide", preco: 1500 },
  { nome: "Mouse Gamer", preco: 120 },
  { nome: "Webcam Full HD", preco: 200 }
];


const maisCaro = encontrarProdutoMaisCaro(produtos);
console.log(maisCaro); 
