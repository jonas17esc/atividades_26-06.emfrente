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
    },
    removerLivro(nome){
        for(let i = 0; i < this.livros.length; i++){
            if(this.livros[i].nome.toLowerCase() === nome.toLowerCase()){
                const removido = this.livros[i]
                this.livros.splice(i,1);
                console.log("Livro removido", removido.nome);
                return;
}} console.log("Livro não encontrado");
},
buscar(nome){
    for(let i = 0; i<this.livros.length; i++){
        const l = this.livros[i]
        if(l.nome.toLowerCase() === nome.toLowerCase()){
            console.log("Livro encontrado:");
                console.log(l);
            return l;
        }
    }
    console.log("Livro não encontrado")
    return null
}

};


// Adicionando livros
biblioteca.adicionarLivros(
    "Harry Potter e a Pedra Filosofal",
    "J. K. Rowling",
    1997,
    "Fantasia",
    1000
);

biblioteca.adicionarLivros(
    "Harry Potter e o Enigma do Príncipe",
    "J. K. Rowling",
    2005,
    "Fantasia",
    1000
);

biblioteca.adicionarLivros(
    "Vingadores: Guerra Civil",
    "Marvel",
    2016,
    "Ação",
    1000
);

biblioteca.adicionarLivros(
    "Alice no País das Maravilhas",
    "Lewis Carroll",
    1865,
    "Fantasia",
    1000
);

biblioteca.adicionarLivros(
    "Piratas do Caribe",
    "Disney",
    2003,
    "Aventura",
    1000
);

biblioteca.adicionarLivros(
    "Game of Thrones",
    "George R. R. Martin",
    1996,
    "Fantasia",
    1000
);

biblioteca.adicionarLivros(
    "As Aventuras de Gulliver",
    "Jonathan Swift",
    1726,
    "Aventura",
    1000
);

// Lista os livros
biblioteca.mostrarLivros();

// Aluga um livro
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.alugar("Harry Potter e a Pedra Filosofal");




// Devolve o livro
biblioteca.devolver("As Aventuras de Gulliver");

// Remover o livro 
biblioteca.removerLivro("Piratas do Caribe")

// Lista os livros
biblioteca.mostrarLivros();

// Buscar livro
biblioteca.buscar("Harry Potter e a Pedra Filosofal");
























// Mostra a tabela
biblioteca.mostrarTabela();