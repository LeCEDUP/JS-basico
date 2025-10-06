//exercício um array e loop
const numeros = [1, 12, 13 , 200, 500000];
// array de números.
function encontrarMaiorNumero(arrayDeNumeros) {
  // Cria um lugar pra guarda o maior numero
  // começar com o lugar vazio pq nao sabemos o primeiro numero
  let maiorNumeroAteAgora = null;

  // Olhacada número do array
  // A cada volta o numero receberá um dos itens do array.
  for (const numero of arrayDeNumeros) {

    // verefica se maiorNumeroAteAgora esta vazia se sim tranforma o numero de agora em maior
    if (maiorNumeroAteAgora === null) {
      maiorNumeroAteAgora = numero;
    }

    // Comparar o número atual com o maior que já temos se o numero for maior ele vira o maior numeroateagora
    else if (numero > maiorNumeroAteAgora) {
      maiorNumeroAteAgora = numero;
    }
  }

  return maiorNumeroAteAgora;
}

// guardando o resultado em uma variavel pra chamar e mostrar dps
const resultado = encontrarMaiorNumero(numeros);

if (resultado === null) {
  console.log("Lista vazia")}
else  {(console.log(`O maior número encontrado foi: ${resultado}`))
}

