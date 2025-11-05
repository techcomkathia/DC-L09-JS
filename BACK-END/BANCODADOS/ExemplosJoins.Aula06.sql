CREATE DATABASE IF NOT EXISTS loja_demo; USE loja_demo; 
-- 2) tabelas principais 
-- tabela de clientes 
CREATE TABLE IF NOT EXISTS clientes ( cliente_id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(100) NOT NULL, email VARCHAR(150) UNIQUE, cidade VARCHAR(100), criado_em DATE DEFAULT (CURRENT_DATE) ); 

-- tabela de produtos 
CREATE TABLE IF NOT EXISTS produtos ( produto_id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(150) NOT NULL, categoria VARCHAR(100), preco_unit DECIMAL(10,2) NOT NULL, estoque INT NOT NULL DEFAULT 0 ); 
-- tabela de pedidos (cabeçalho) 
CREATE TABLE IF NOT EXISTS pedidos ( pedido_id INT AUTO_INCREMENT PRIMARY KEY, cliente_id INT NOT NULL, data_pedido DATE NOT NULL DEFAULT (CURRENT_DATE), status ENUM('PENDENTE','ENVIADO','CANCELADO') DEFAULT 'PENDENTE', FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id) ); 
-- tabela de itens do pedido (detalhe) 
CREATE TABLE IF NOT EXISTS pedido_itens ( pedido_item_id INT AUTO_INCREMENT PRIMARY KEY, pedido_id INT NOT NULL, produto_id INT NOT NULL, quantidade INT NOT NULL, preco_unit_compra DECIMAL(10,2) NOT NULL,
-- registra preço no momento do pedido 
FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id), FOREIGN KEY (produto_id) REFERENCES produtos(produto_id) );
-- tabela para arquivar relatório de vendas (exemplo de INSERT ... SELECT) 
CREATE TABLE IF NOT EXISTS relatorio_vendas ( relatorio_id INT AUTO_INCREMENT PRIMARY KEY, data_rel DATE, produto_id INT, total_qtde INT, total_venda DECIMAL(12,2) );

---------------------------------------------------------
-- CLIENTES
---------------------------------------------------------
INSERT INTO clientes (nome, email, cidade) VALUES
('Ana Silva', 'ana.silva@email.com', 'Fortaleza'),
('Carlos Lima', 'carlos.lima@email.com', 'Sobral'),
('Mariana Costa', 'mariana.costa@email.com', 'Caucaia'),
('João Pedro', 'joao.pedro@email.com', 'Fortaleza'),
('Paula Torres', 'paula.t@email.com', 'Juazeiro'); 
-- Paula será cliente sem pedidos (LEFT JOIN mostra ela)

---------------------------------------------------------
-- PRODUTOS
---------------------------------------------------------
INSERT INTO produtos (nome, categoria, preco_unit, estoque) VALUES
('Notebook Lenovo', 'Informática', 3500.00, 10),
('Mouse Gamer', 'Acessórios', 120.00, 30),
('Teclado Mecânico', 'Acessórios', 280.00, 20),
('Monitor LG 24"', 'Informática', 900.00, 15),
('Webcam HD', 'Acessórios', 150.00, 25),
('Cadeira Gamer', 'Móveis', 1200.00, 5);
-- "Cadeira Gamer" será produto sem venda (LEFT JOIN mostra NULL)

---------------------------------------------------------
-- PEDIDOS
---------------------------------------------------------
INSERT INTO pedidos (cliente_id, data_pedido, status) VALUES
(1, '2025-10-20', 'ENVIADO'),
(1, '2025-10-25', 'PENDENTE'),
(2, '2025-10-21', 'CANCELADO'),
(3, '2025-10-22', 'ENVIADO'),
(4, '2025-10-23', 'ENVIADO');

-- cliente 5 (Paula) não tem pedido → serve para LEFT JOIN

---------------------------------------------------------
-- PEDIDO_ITENS (detalhamento de cada pedido)
---------------------------------------------------------
INSERT INTO pedido_itens (pedido_id, produto_id, quantidade, preco_unit_compra) VALUES
-- Pedido 1 (cliente 1)
(1, 1, 1, 3500.00),       -- Notebook
(1, 2, 2, 120.00),        -- Mouse

-- Pedido 2 (cliente 1)
(2, 3, 1, 280.00),        -- Teclado

-- Pedido 3 (cliente 2 - cancelado)
(3, 2, 1, 120.00),

-- Pedido 4 (cliente 3)
(4, 1, 1, 3500.00),
(4, 4, 1, 900.00),

-- Pedido 5 (cliente 4)
(5, 2, 2, 120.00),
(5, 3, 1, 280.00),
(5, 5, 1, 150.00);

-- Observações importantes para JOINs:
-- ✅ Existem clientes COM pedidos
-- ✅ Existe cliente SEM pedido (Paula)
-- ✅ Existem produtos COM venda (Notebook, Mouse, etc.)
-- ✅ Existe produto SEM venda (Cadeira Gamer)
