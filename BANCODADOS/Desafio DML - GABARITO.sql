
USE LojaDeAutomoveis;

insert into fabricantes (nome, pais_origem) values
('Toyota', 'Japão'),
('Honda', 'Japão'),
('Volkswagen', 'Alemanha'),
('Scania', 'Suécia'),
('Chevrolet', 'Estados Unidos');

insert into categorias (nome) values
('Carro'),
('Moto'),
('Caminhão');

insert into categorias (nome) values
('Carro-Popular');

insert into veiculos (id ,modelo, ano_fabricacao, preco, fabricante_id, categoria_id) values
(1,' Corolla',  '2022',  '135000.00',  1, 1),
(2,' Civic', ' 2023 ',' 142000.00 ',2,1),
(3,'Gol ',' 2021', '78000.00', 3, 1),
(4,' CB 500', ' 2022','  42000.00', 2, 2),
(5,' S10 ',' 2023', ' 210000.00', 5 ,3),
(6,' Scania R450', ' 2021', ' 550000.00', 4, 3);

update veiculos
set preco = 145000.000
where id = 1;

update veiculos
set ano_fabricacao = 2023
where id = 4;

update veiculos
set categoria_id = 4
where id = 3;

delete from veiculos where categoria_id = 3;
delete from categorias where id =3;