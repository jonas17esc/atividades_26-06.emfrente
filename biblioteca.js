const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero) {
        const livro = {
            nome:nome,
            autor:autor,
            ano:ano,
            genero:genero,
            disponivel: "sim",
            alugado: "não",
            vezesAlugado: 0
        };

        this.livros.push(livro);
    },

    mostrarLivros(){
        for(let i=0; i<this.livros.length; i++){
            const L= this.livros[i];
            console.log(L.nome + " - " + L.autor + " - " + L.ano + " - " + L.genero);
        }
    }
};

biblioteca.adicionarLivros(
    "Harry Potter e a Pedra Filosofal",
    "J. K. Rowling",
    1997,
    "Fantasia"
);

biblioteca.adicionarLivros(
    "Harry Potter e o Enigma do Príncipe",
    "J. K. Rowling",
    2005,
    "Fantasia"
);

console.log(biblioteca.livros);
biblioteca.mostrarLivros();