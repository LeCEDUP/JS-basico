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

//toma ai um exemplo de uso✌
const produtos = [
  { nome: "Notebook", preco: 2501 },
  { nome: "Smartphone", preco: 2500 },
  { nome: "Monitor", preco: 900 }
];
console.log(encontrarProdutoMaisCaro(produtos)); // pelos meus calculos vai imprimir {"Notebook", preco: 2501}


//## Exercício 5: Array de Objetos e Loop - Encontrar o Produto Mais Caro
// Descrição
//Dada uma lista de objetos representando produtos, onde cada produto possui `nome` (string) e `preco` (number), crie uma função chamada `encontrarProdutoMaisCaro`.
//A função deve receber um array de objetos de produto e retornar o objeto do produto que possui o maior preço.
//###Dicas
// //Inicialize uma variável para armazenar o produto mais caro encontrado até o momento.
//Use um loop `for` para percorrer o array de produtos.
//Dentro do loop, compare o preço do produto atual com o preço do produto mais caro armazenado. Se o produto atual for mais caro, atualize a variável.
//Lembre-se de lidar com o caso de um array vazio.