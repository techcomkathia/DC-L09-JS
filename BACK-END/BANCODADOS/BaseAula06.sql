-- CRIAÇÃO DO BANCO
CREATE DATABASE IF NOT EXISTS estacionamento_db; USE estacionamento_db; 
---------------------------------------------------- -- TABELA: clientes ---------------------------------------------------- 
CREATE TABLE clientes (
     cliente_id INT AUTO_INCREMENT PRIMARY KEY, 
     nome VARCHAR(100) NOT NULL,
     telefone VARCHAR(20),
     cidade VARCHAR(100) 
    ); 
---------------------------------------------------- -- TABELA: modelos -- cada carro tem um modelo como chave estrangeira ---------------------------------------------------- 
CREATE TABLE modelos ( 
    modelo_id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(100) NOT NULL,
    nome_modelo VARCHAR(100) NOT NULL 
); 
---------------------------------------------------- -- TABELA: carros -- cada carro tem um modelo, e pode pertencer a um cliente ----------------------------------------------------

CREATE TABLE carros ( 
    carro_id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) UNIQUE NOT NULL,
    cor VARCHAR(20),
    modelo_id INT NOT NULL,
    cliente_id INT NOT NULL,
    FOREIGN KEY (modelo_id) REFERENCES modelos(modelo_id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id) 
);
------------------------------------------------------ TABELA: estacionamentos -- cadastro de estacionamentos (caso a empresa tenha mais de 1 unidade) ---------------------------------------------------- CREATE TABLE estacionamentos ( estacionamento_id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(100), cidade VARCHAR(100) ); ---------------------------------------------------- -- TABELA: carro_estacionamento -- cada entrada e saída de carro no estacionamento -- permite colunas calculadas depois, como valor total ---------------------------------------------------- CREATE TABLE carro_estacionamento ( registro_id INT AUTO_INCREMENT PRIMARY KEY, carro_id INT NOT NULL, estacionamento_id INT NOT NULL, data_entrada DATETIME NOT NULL, data_saida DATETIME, valor_hora DECIMAL(5,2) NOT NULL, FOREIGN KEY (carro_id) REFERENCES carros(carro_id), FOREIGN KEY (estacionamento_id) REFERENCES estacionamentos(estacionamento_id) ); ---------------------------------------------------- -- POPULANDO CLIENTES (10 clientes) ---------------------------------------------------- INSERT INTO clientes (nome, telefone, cidade) VALUES ('Ana Silva','88990011','Fortaleza'), ('Carlos Lima','88993377','Fortaleza'), ('Mariana Costa','88992211','Sobral'), ('João Pedro','88995533','Fortaleza'), ('Ricardo Freitas','88997755','Caucaia'), ('Fernanda Alves','88991144','Maracanaú'), ('Paulo Souza','88998800','Fortaleza'), ('Juliana Martins','88993210','Aquiraz'), ('Lucas Rocha','88990022','Sobral'), ('Bianca Torres','88995500','Fortaleza'); ---------------------------------------------------- -- POPULANDO MODELOS ---------------------------------------------------- INSERT INTO modelos (marca, nome_modelo) VALUES ('Toyota','Corolla'), ('Honda','Civic'), ('Chevrolet','Onix'), ('Volkswagen','Gol'), ('Fiat','Uno'), ('Hyundai','HB20'), ('Renault','Sandero'); ---------------------------------------------------- -- POPULANDO CARROS (ligados a clientes e modelos) ---------------------------------------------------- INSERT INTO carros (placa, cor, modelo_id, cliente_id) VALUES ('ABC1A23','Prata',1,1), ('DEF2B34','Branco',2,2), ('GHI3C45','Preto',3,3), ('JKL4D56','Prata',4,4), ('MNO5E67','Vermelho',3,1), ('PQR6F78','Azul',5,5), ('STU7G89','Preto',6,6), ('VWX8H10','Branco',1,7), ('YZA9I11','Cinza',7,8), ('BCD0J22','Preto',2,9); ---------------------------------------------------- -- POPULANDO ESTACIONAMENTOS ---------------------------------------------------- INSERT INTO estacionamentos (nome, cidade) VALUES ('Estacionamento Central','Fortaleza'), ('Estacionamento Shopping','Fortaleza'), ('Estacionamento Aeroporto','Fortaleza'); ---------------------------------------------------- -- POPULANDO REGISTROS DE CARROS NO ESTACIONAMENTO ---------------------------------------------------- INSERT INTO carro_estacionamento (carro_id, estacionamento_id, data_entrada, data_saida, valor_hora) VALUES (1,1,'2025-10-20 08:00','2025-10-20 10:00',5.00), (2,1,'2025-10-20 09:00','2025-10-20 11:30',5.00), (3,2,'2025-10-21 14:00','2025-10-21 15:00',6.00), (4,1,'2025-10-22 07:00','2025-10-22 09:00',5.00), (5,3,'2025-10-23 10:00','2025-10-23 13:00',7.00), (1,2,'2025-10-25 09:00','2025-10-25 10:00',6.00), (7,1,'2025-10-25 11:00','2025-10-25 12:30',5.00), (8,2,'2025-10-26 10:00',NULL,6.00); -- ainda estacionado