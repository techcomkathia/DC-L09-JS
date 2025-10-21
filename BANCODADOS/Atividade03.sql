create database atividade03 ;
use atividade03;

create table projects(
	id int auto_increment
    primary key,
    name varchar(45)
    not null,
    description varchar(45)
    not null,
    data varchar(45) not null
);

create table users(
	id int auto_increment
    primary key,
    name varchar(45) not null,
    username varchar(45),
    password varchar(45) not null,
    email varchar(45) not null
);

create table users_has_projects(
	users_id int,
    projects_id int,
    -- definir a chave primária composta
    primary key (users_id, projects_id),
    -- definição das chaves estrangeiras
    foreign key (users_id) references users(id),
    foreign key (projects_id) references projects(id)
);

