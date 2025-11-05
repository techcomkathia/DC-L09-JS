use loja;
-- Liste todos os dados da tabela ITEM
SELECT * FROM item;
-- Liste apenas o nome dos produtores
SELECT nomeProdutor FROM produtor;

-- COM CONDIÇÕES

-- Liste o nome e o valor unitário dos itens cujo o valor unitário seja maior que 50 reais
SELECT nomeItem, valorUnit FROM item
WHERE valorUnit > 50;
-- MAIOR OU IGUAL A 280
SELECT nomeItem, valorUnit FROM item
WHERE valorUnit >= 280;

-- Mostre o nome de todos os produtores que estejam na cidade de Fortaleza
SELECT nomeProdutor FROM produtor
WHERE cidade = 'Fortaleza';

-- renomeando a coluna na visualização do select
SELECT nomeProdutor as 'Produtor' FROM produtor
WHERE cidade = 'São Paulo';


SELECT * FROM nf; -- seleção para saber os dias

SELECT numeroNf, dataNf FROM nf
WHERE dataNf = '2025-01-17';