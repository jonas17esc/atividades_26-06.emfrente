const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero, estoque = 1) {
        const livro = {
            nome:nome,
            autor:autor,
            ano:ano,
            genero:genero,
            vezesAlugado: 0,
            estoque:estoque
        };

        this.livros.push(livro);
    },

    mostrarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            console.log(
                `${l.nome} - ${l.autor} - ${l.ano} - ${l.genero} - Estoque: ${l.estoque} - Disponível: ${l.estoque > 0 ? "Sim" : "Não"}`
            );
        }
    },

    alugar(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque > 0) {
                    l.estoque--;
                    l.vezesAlugado++;

                    console.log(`O livro "${nome}" foi alugado com sucesso!`);
                    return;
                } else {
                    console.log(`O livro "${nome}" está sem estoque, por favor escolha outro livro.`);
                    return;
                }
            }
        }

        console.log(`O livro "${nome}" não existe na biblioteca.`);
    }
};


biblioteca.adicionarLivros(
    "Harry Potter e a Pedra Filosofal",
    "J. K. Rowling",
    1997,
    "Fantasia",
    2
);

biblioteca.adicionarLivros(
    "Harry Potter e o Enigma do Príncipe",
    "J. K. Rowling",
    2005,
    "Fantasia"
);

biblioteca.mostrarLivros();

biblioteca.alugar("Harry Potter e a Pedra Filosofal");

biblioteca.mostrarLivros();