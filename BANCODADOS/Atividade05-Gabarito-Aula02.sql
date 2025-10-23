use livraria;

alter table autores add data_nascimento date;

-- =========================================
-- INSERÇÃO DOS AUTORES
-- =========================================
INSERT INTO autores (nome, nacionalidade, data_nascimento) VALUES
('J.K. Rowling', 'Britânica', '1965-07-31'),
('George R.R. Martin', 'Americana', '1948-09-20'),
('J.R.R. Tolkien', 'Britânica', '1892-01-03'),
('Isaac Asimov', 'Americana', '1920-01-02');

insert INTO autores (nome, nacionalidade, data_nascimento) VALUES
('Cleitinho', 'Brasileiro', null);

-- =========================================
-- INSERÇÃO DAS CATEGORIAS
-- =========================================
INSERT INTO categorias (nome) VALUES
('Fantasia'),
('Ficção Científica'),
('Mistério'),
('Romance');

-- =========================================
-- INSERÇÃO DOS LIVROS
-- =========================================
-- Observação: Os IDs de autores e categorias correspondem à ordem de inserção acima
INSERT INTO livros (titulo, ano_publicacao, preco, autor_id, categoria_id) VALUES
('Harry Potter e a Pedra Filosofal', 1997, 39.90, 1, 1),
('Game of Thrones', 1996, 49.90, 2, 1),
('O Senhor dos Anéis', 1954, 59.90, 3, 1),
('Eu, Robô', 1950, 29.90, 4, 2),
('O Hobbit', 1937, 34.90, 3, 1);

-- atualizar o valor do livro Harry Potter e a Pedra Filosofal para 10 reais a menos
update livros
set preco = preco * 10
where id = 1;