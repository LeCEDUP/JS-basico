function contarVogais(texto) {

  let contadorDeVogais = 0;

  const textoEmMinusculas = texto.toLowerCase();

  for (const caractere of textoEmMinusculas) {


    if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {

      contadorDeVogais = contadorDeVogais + 1;
    }
  }

  return contadorDeVogais;
}

const textoExemplo = "Hello World";

const totalDeVogais = contarVogais(textoExemplo);

console.log(`O número total de vogais é: ${totalDeVogais}`);
