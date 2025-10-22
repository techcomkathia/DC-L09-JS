create database escola;                      use escola;

create table alunos(
	idAluno int auto_increment primary key,
    nome varchar(100) not null,
    data_nascimento date not null,
    email varchar(100) unique
);

create table professores(
	idProfessor int auto_increment primary key,
    nome varchar(100) not null,
    area_atuacao varchar(50) not null
);

create table disciplinas(
	idDisciplina int auto_increment primary key,
    nome varchar(100) not null,
    
    professor_id int,
    foreign key (professor_id) references professores(idProfessor)
);

create table matriculas(
	idMatriculas int auto_increment primary key,
    
    aluno_id int,
    disciplina_id int,
    
    foreign key (aluno_id) references alunos(idAluno),
    foreign key (disciplina_id) references disciplinas(idDisciplina),
    data_maticula date
);

alter table alunos add telefone varchar(15);
rename table professores to especialidade;
alter table alunos drop column telefone;
-- drop table matriculas;
-- drop database escola;

insert into alunos (nome, data_nascimento,email)
values('Ana Clara', '2000-10-23', 'clara@email.com'),
('João Paulo', '2001-02-10', 'joao@email.com'),
('Maria Joaquina', '1999-04-20', 'maria@email.com');

INSERT INTO especialidade (nome, area_atuacao) VALUES
('Ana Martins', 'Matemática'),
('Ricardo Nogueira', 'Português'),
('Fernanda Costa', 'História'),
('Paulo Ramos', 'Física');

INSERT INTO disciplinas (nome, professor_id) VALUES
('Matemática Básica', 1),
('Gramática Avançada', 2),
('História do Brasil', 3),
('Física Experimental', 4);

INSERT INTO matriculas (aluno_id, disciplina_id, data_maticula) VALUES
(1, 13, '2025-02-10'),
(2, 14, '2025-02-10'),
(3, 15, '2025-02-11');