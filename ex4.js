function somar(a, b) {
  return a + b;
}

function saudacao(nome = "visitante") {
  console.log(`Olá, ${nome}!`);
}

function ehPar(numero) {
  return numero % 2 === 0;
}

function aplicarOperacao(callback, num1, num2) {
  return callback(num1, num2);
}
