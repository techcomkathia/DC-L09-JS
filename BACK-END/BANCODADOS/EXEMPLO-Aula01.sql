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

-- tabela de ligação / tabela com chaves estrangeiras

create table professores_disciplinas(
	idProfessores_disciplinas int auto_increment
    primary key, 
    fkProfessor int,
    fkDisciplina int,
    -- configuração da chave estrangeira 
    foreign key (fkProfessor) references 
    professores(idProfessor),
    foreign key (fkDisciplina) references 
    disciplinas(idDisciplina));