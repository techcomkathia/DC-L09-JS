create database cadastro;
use cadastro;
create table cliente(
	id int auto_increment primary key
);
create table PessoaFisica(
	pfid int auto_increment primary key,
    nome varchar(255),
    sobrenome varchar(255),
    CPF int(12),
    RG int(20),
    dataNascimento date,
    cliente_id int,
	foreign key (cliente_id) references cliente(id)
    );
create table PessoaJuridica(
	cliente_id int,
    foreign key (cliente_id) references cliente(id)
);
create table TipoContato(
	tcid int auto_increment primary key,
    nome varchar(255)
);
create table contatos(
	cid int auto_increment primary key,
    nome varchar(255),
    campo varchar(255),
    obs text,
    tipo_contato int,
    cliente_id int,
    foreign key (tipo_contato) references TipoContato(tcid),
    foreign key (cliente_id) references cliente(id)
);