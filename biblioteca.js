const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero, estoque = 1) {
        const livro = {
            nome: nome,
            autor: autor,
            ano: ano,
            genero: genero,
            vezesAlugado: 0,
            estoque: estoque,
            estoqueInicial: estoque
        };

        this.livros.push(livro);
    },

    mostrarLivros() {
        console.log("=== LISTA DE LIVROS ===");

        for (let i = 0; i < this.livros.length; i++) {
            const livro = this.livros[i];

            console.log(
                `${i + 1}. ${livro.nome} - ${livro.autor} (${livro.ano}) | ${livro.genero} | Alugado ${livro.vezesAlugado}x | Estoque: ${livro.estoque}`
            );
        }
    },

    mostrarTabela() {
        console.table(this.livros);
    },

    alugar(nome) {
        if (!nome) {
            console.log("Informe o nome do livro que deseja alugar.");
            return;
        }

        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque > 0) {
                    l.estoque--;
                    l.vezesAlugado++;

                    console.log(`O livro "${nome}" foi alugado com sucesso!`);
                } else {
                    console.log(`O livro "${nome}" está sem estoque, por favor escolha outro livro.`);
                }

                return;
            }
        }

        console.log(`O livro "${nome}" não existe na biblioteca.`);
    },

    devolver(nome) {
        if (!nome) {
            console.log("Informe o nome do livro que deseja devolver.");
            return;
        }

        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque < l.estoqueInicial) {
                    l.estoque++;
                    console.log(`O livro "${nome}" foi devolvido com sucesso!`);
                } else {
                    console.log(`O livro "${nome}" já está disponível na biblioteca.`);
                }

                return;
            }
        }

        console.log(`O livro "${nome}" não existe na biblioteca.`);
    }
};

// Adicionando livros
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

biblioteca.adicionarLivros(
    "Vingadores: Guerra Civil",
    "Marvel",
    2016,
    "Ação",
    3
);

biblioteca.adicionarLivros(
    "Alice no País das Maravilhas",
    "Lewis Carroll",
    1865,
    "Fantasia",
    2
);

biblioteca.adicionarLivros(
    "Piratas do Caribe",
    "Disney",
    2003,
    "Aventura",
    2
);

biblioteca.adicionarLivros(
    "Game of Thrones",
    "George R. R. Martin",
    1996,
    "Fantasia",
    4
);

biblioteca.adicionarLivros(
    "As Aventuras de Gulliver",
    "Jonathan Swift",
    1726,
    "Aventura",
    1
);

// Mostra a lista de livros
biblioteca.mostrarLivros();

// Aluga um livro
biblioteca.alugar("Harry Potter e a Pedra Filosofal");

// Devolve o livro
biblioteca.devolver("Harry Potter e a Pedra Filosofal");

// Mostra apenas uma tabela no final
biblioteca.mostrarTabela();