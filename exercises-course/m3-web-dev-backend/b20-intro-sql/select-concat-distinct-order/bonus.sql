SELECT * FROM PiecesProviders.Provides;

SELECT piece, price FROM PiecesProviders.Provides
WHERE provider = 'RBT';

SELECT * FROM PiecesProviders.Provides
ORDER BY price DESC
LIMIT 5;

SELECT provider, price FROM PiecesProviders.Provides
ORDER BY price DESC
LIMIT 4 OFFSET 2;

SELECT * FROM PiecesProviders.Provides
WHERE provider = 'HAL'
ORDER BY price DESC;

SELECT COUNT(piece) FROM PiecesProviders.Provides
WHERE piece = 1;