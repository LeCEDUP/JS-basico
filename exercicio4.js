function contarVogais(texto) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

// Teste com o exemplo fornecido
const texto = "Hello World! Programando em JavaScript.";
console.log(contarVogais(texto));