let num1 = 4
let num2 = 3
 let nota = 75


let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;


console.log("Soma:", soma)
console.log("Subtração:", subtracao)
console.log("Multiplicação:", multiplicacao)
console.log("Divisão:", divisao)


console.log("num1 > num2:", num1 > num2)
console.log("num1 === num2:", num1 === num2)


if (nota >= 90 && nota <= 100) {
    console.log("A");} 
    
    else if (nota >= 80 && nota <= 89) {
    console.log("B");} 

    else if (nota >= 70 && nota <= 79) {
    console.log("C");}

    else if (nota >= 60 && nota <= 69) {
    console.log("D");} 
    
    else if (nota < 60 && nota >= 0) {
    console.log("F");} 
    
    else {
    console.log("Nota inválida");}