const texto = "Hello World! Programando em JavaScript.";

const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

const contarVogais = (texto) => {
        let quant_vogais = 0;
        if (texto.length !== 0) {
                for (let letra of texto) {
                        if (vogais.includes(letra)) {
                                quant_vogais++;
                        }
                }
        } else {
                return `Texto inválido.`
        }
        return quant_vogais;
}

console.log(contarVogais(texto));
