CREATE DATABASE IF NOT EXISTS LojaDeAutomoveisGabarito;
USE LojaDeAutomoveisGabarito;
CREATE TABLE fabricantes (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
pais_origem VARCHAR(50)
);
CREATE TABLE categorias (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL
);
CREATE TABLE veiculos (
id INT AUTO_INCREMENT PRIMARY KEY,
modelo VARCHAR(100) NOT NULL,
ano_fabricacao YEAR NOT NULL,
preco DECIMAL(10,2) NOT NULL,
fabricante_id INT,
categoria_id INT, FOREIGN KEY (fabricante_id) REFERENCES fabricantes(id),
FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

/*Questão 1:Adicione os seguintes fabricantes à tabela fabricantes:
- Toyota – Japão
- Honda – Japão
- Volkswagen – Alemanha
- Scania – Suécia
- Chevrolet – Estados Unidos*/
INSERT INTO fabricantes (nome, pais_origem)
VALUES ('Toyota', 'Japão');

INSERT INTO fabricantes (nome, pais_origem)
VALUES ('Honda', 'Japão'),
('Volkswagen', 'Alemanha'),
('Scania','Suécia'),
('Chevrolet', 'Estados Unidos');

INSERT INTO fabricantes (nome) VALUES ('BYD');
INSERT INTO fabricantes (nome, pais_origem) VALUES ('BMW', null); -- tipo null é diferente da string 'null'
INSERT INTO fabricantes (nome, pais_origem) VALUES ('teste', 'null');

/*Questão 2:Adicione as seguintes categorias à tabela categorias:
- Carro
- Moto
- Caminhão*/

INSERT INTO categorias (nome) VALUES 
('Carro'),('Moto'),('Caminhão');

/*Questão 3:Adicione os seguintes veículos à tabela veiculos, associando aos fabricantes e
categorias correspondentes

pondentes:
| Modelo | Ano | Preço | Fabricante | Categoria |
| Corolla | 2022 | 135000.00 | Toyota | Carro |
| Civic | 2023 | 142000.00 | Honda | Carro |
| Gol | 2021 | 78000.00 | Volkswagen | Carro |
| CB 500 | 2022 | 42000.00 | Honda | Moto |
| S10 | 2023 | 210000.00 | Chevrolet | Caminhão |
| Scania R450 | 2021 | 550000.00 | Scania | Caminhão |*/
insert into veiculos (id ,modelo, ano_fabricacao, preco, fabricante_id, categoria_id) values
(1,' Corolla',  '2022',  '135000.00',  1, 1),
(2,' Civic', ' 2023 ',' 142000.00 ',2,1),
(3,'Gol ',' 2021', '78000.00', 3, 1),
(4,' CB 500', ' 2022','  42000.00', 2, 2),
(5,' S10 ',' 2023', ' 210000.00', 5 ,3),
(6,' Scania R450', ' 2021', ' 550000.00', 4, 3);

-- Questão 4:Atualize o preço do modelo Corolla para R$145.000,00
-- update NOMETABELA set coluna=valorParaColuna 
-- WHERE condição (pk ou fk)
UPDATE veiculos SET preco = '145000.00'
WHERE id = 1; -- chave primária -> 1 linha afetada

--  EXEMPLO : ATUALIZAR TODOS OS CARROS (fk de categoria) para o ano de 2025
UPDATE veiculos SET ano_fabricacao = '2025' 
WHERE categoria_id = 1; -- chave estrageira  + de uma linha afetada

-- Questão 5:Atualize o ano de fabricação da CB 500 para 2023
UPDATE veiculos SET ano_fabricacao = '2023'
WHERE id = 4;

-- Questão 6:Adicione a categoria "Carro Popular" e atualize o Gol para pertencer a essa categoria.
INSERT INTO categorias (nome) value ('Carro Popular');
UPDATE veiculos SET categoria_id = 4
WHERE id = 3;

-- Questão 7:Remova o modelo S10 da tabela veiculos
-- exclusão por pk
DELETE FROM veiculos WHERE id = 5;

-- Questão 8:Remova o fabricante Scania e todos os veículos relacionados.
-- exclusão por fk
DELETE FROM veiculos WHERE categoria_id = 3;
DELETE FROM categorias WHERE id = 3;
-- excluir primeiro onde a chave é usada com FK e depois onde a informação é Pk