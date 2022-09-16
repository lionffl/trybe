SELECT * FROM PecasFornecedores.Pecas;

SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'gr%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE code = 2;

SELECT peca, Preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%n%';

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '% LTDA'
ORDER BY name DESC;

SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%f%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 15 AND 40;

SELECT COUNT(code) FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';