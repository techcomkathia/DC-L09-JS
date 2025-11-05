CREATE database livraria;
use livraria;
-- tabelas com chaves primarias
create table autores(
	idAutor int auto_increment primary key,
    nome varchar(100),
    nacionalidade varchar(50)
);
create table categorias(
	idCategoria int auto_increment primary key,
    nome varchar(50)
); 

CREATE TABLE  livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    ano_publicacao YEAR,
    preco DECIMAL(6,2),
    autor_id INT,
    categoria_id INT,
    FOREIGN KEY (autor_id) REFERENCES autores(idAutor),
    FOREIGN KEY (categoria_id) REFERENCES categorias(idCategoria)
);
