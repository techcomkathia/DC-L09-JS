-- 1) criar o banco e usar
CREATE DATABASE IF NOT EXISTS loja_demo;
USE loja_demo;

-- 2) tabelas principais
-- tabela de clientes
CREATE TABLE IF NOT EXISTS clientes (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    cidade VARCHAR(100),
    criado_em DATE DEFAULT (CURRENT_DATE)
);

-- tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
    produto_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    categoria VARCHAR(100),
    preco_unit DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL DEFAULT 0
);

-- tabela de pedidos (cabeçalho)
CREATE TABLE IF NOT EXISTS pedidos (
    pedido_id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    data_pedido DATE NOT NULL DEFAULT (CURRENT_DATE),
    status ENUM('PENDENTE','ENVIADO','CANCELADO') DEFAULT 'PENDENTE',
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

-- tabela de itens do pedido (detalhe)
CREATE TABLE IF NOT EXISTS pedido_itens (
    pedido_item_id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unit_compra DECIMAL(10,2) NOT NULL, -- registra preço no momento do pedido
    FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id)
);

-- tabela para arquivar relatório de vendas (exemplo de INSERT ... SELECT)
CREATE TABLE IF NOT EXISTS relatorio_vendas (
    relatorio_id INT AUTO_INCREMENT PRIMARY KEY,
    data_rel DATE,
    produto_id INT,
    total_qtde INT,
    total_venda DECIMAL(12,2)
);


-- inserir clientes
INSERT INTO clientes (nome, email, cidade) VALUES
('Ana Silva','ana.silva@email.com','Fortaleza'),
('João Pereira','joao.pereira@mail.com','Fortaleza'),
('Mariana Costa','mariana.costa@gmail.com','Sobral');

-- inserir produtos
INSERT INTO produtos (nome, categoria, preco_unit, estoque) VALUES
('Caderno A4 100fls','Papelaria', 12.50, 50),
('Caneta Esferográfica Azul','Papelaria', 2.30, 200),
('Livro: SQL Essencial','Livros', 85.00, 10),
('Mochila Escolar','Acessórios', 120.00, 25),
('Fone de Ouvido','Eletrônicos', 65.90, 15);

-- inserir pedidos
INSERT INTO pedidos (cliente_id, data_pedido, status) VALUES
(1, '2025-10-01', 'ENVIADO'),
(2, '2025-10-05', 'PENDENTE'),
(1, '2025-10-10', 'ENVIADO');

-- inserir itens dos pedidos
INSERT INTO pedido_itens (pedido_id, produto_id, quantidade, preco_unit_compra) VALUES
(1, 1, 2, 12.50),      -- pedido 1: 2 cadernos
(1, 2, 5, 2.30),       -- pedido 1: 5 canetas
(2, 3, 1, 85.00),      -- pedido 2: 1 livro
(3, 4, 1, 120.00),     -- pedido 3: 1 mochila
(3, 2, 10, 2.30);      -- pedido 3: 10 canetas

