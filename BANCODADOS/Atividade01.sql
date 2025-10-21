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