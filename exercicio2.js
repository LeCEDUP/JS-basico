function somarPares(num) {
    let soma = 0;
    
    for (let n of num){
      if (n % 2 === 0) {
        soma += n;
      }  
    }
    
    return soma;

}

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(somarPares(num2));