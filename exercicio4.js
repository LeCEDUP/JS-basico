function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}
const frase = "Oie, Sora Leticia,se a sora ver isso na sexta eu faltei pq fui pra praia!";
const totalVogais = contarVogais(frase);
console.log(`Total de vogais na frase: ${totalVogais}`); 