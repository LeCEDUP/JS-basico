// Crie uma função chamada contarVogais que recebe uma string como argumento. A 
// função deve retornar o número total de vogais (a, e, i, o, u), tanto 
// maiúsculas quanto minúsculas, presentes na string.

const vogais = 'aeiouAEIOUáàâãéèêíïóôõöúÁÀÂÃÉÈÊÍÏÓÔÕÖÚ';
// const contarVogais = (frase) => {
//     let contador = 0;

//     for (letra of frase){
//         if (vogais.includes(letra)){
//             contador++
//         }
//     }

//     return contador;
// }

const contarVogais = (frase) => frase.split('').reduce((acc, att) => vogais
    .includes(att) ? acc + 1 : acc, 0);

const texto = "Hello World! Programando em JavaScript.";
console.log(contarVogais(texto));