-- este é um comentário
-- criação do banco de dados
create database aula01;
-- selecionar banco de dados
use aula01;

-- tabelas com chaves primárias
create table professores(
	idProfessor int auto_increment primary key ,
    nome varchar(150),
    telefone char(11)
);

create table disciplinas(
	idDisciplina int auto_increment primary key,
    nome varchar(20)
);