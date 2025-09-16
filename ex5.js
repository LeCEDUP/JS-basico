let cores = ["azul", "vermelho", "verde"];
cores.push("amarelo");
cores.shift();
console.log("Cores restantes:", cores);

let livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  anoPublicacao: 1899
};
livro.genero = "Romance";
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Chaves do objeto livro:", Object.keys(livro));
console.log("Valores do objeto livro:", Object.values(livro));

