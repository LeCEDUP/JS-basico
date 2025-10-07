function Vogais(texto) {

  let contador = 0;


  const vogais = "aeiou";


  for (let i = 0; i < texto.length; i++) {
    const caractere = texto[i].toLowerCase(); 


    if (vogais.includes(caractere)) {
      contador++;
    }
  }

  return contador;
}

const texto = "Hello World! Programando em JavaScript.";


console.log(Vogais(texto)); // 11