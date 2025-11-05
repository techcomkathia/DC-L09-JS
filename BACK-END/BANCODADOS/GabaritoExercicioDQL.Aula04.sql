use loja;

-- SELECT
-- Liste todos os dados da tabela ITEM
select * from item;
-- Liste apenas o nome dos produtores
select nomeProdutor from produtor;

-- SELECT com WHERE
-- Liste o nome e o valor unitário dos itens cujo o valor unitário seja maior que 50 reais
select nomeItem, valorUnit from item
where valorUnit > 50;
-- Mostre o nome de todos os produtores que estejam na cidade de Fortaleza
select nomeProdutor from produtor
where cidade > 'Fortaleza';
-- Exiba o número da nota e a data de emissão das notas fiscais emitidas no dia (definir dia cadastrado no banco)
select numeroNf as NUMERO, dataNf as 'Data emissão' from nf
where dataNf = '2025-10-01';


-- SELECT com Limit
-- Mostre os 3 primeiros itens da tabela item
select * from item
limit 3;
-- Liste os 2 primeiros produtores cadastrados na cidade de Fortaleza
select nomeProdutor, cidade from produtor
where cidade = 'Fortaleza'
limit 2;

-- SELECT com ORDER BY
-- Liste o nome e o valor unitário dos itens ordenados do mais caro para o mais barato
select * from item
order by valorUnit desc;

-- Exiba os nomes dos produtores ordenados por ordem alfabética pela cidade
select nomeProdutor from produtor
order by nomeProdutor asc;

-- SELECT com GROUP BY

-- Conte o quantos tipos de produtos foram vendidos por nota fiscal 
select fkNf , count(fkItem) as 'qtd de Produtos'
from venda
group by fkNf;

-- Conte quantas vendas cada produtor participou 
select fkProd , count(idVenda) as 'qtd de vendas por produtor'
from venda
group by fkProd;

-- SELECT com DISTINCT 
-- Liste todas as cidades únicas onde há produtores
SELECT distinct cidade FROM produtor;

-- Mostre todos os percentuais de desconto diferentes aplicados nas vendas
SELECT distinct desconto from venda ;
