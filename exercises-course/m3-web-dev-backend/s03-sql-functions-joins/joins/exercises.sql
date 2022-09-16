USE pixar;

SELECT * FROM box_office;

SELECT * FROM movies;

SELECT * FROM theater;

SELECT title, domestic_sales, international_sales FROM box_office AS ofc
INNER JOIN movies AS mov
ON ofc.movie_id = ofc.id;

SELECT mov.title, (oce.international_sales + oce.domestic_sales) FROM box_office AS ofc
INNER JOIN movies AS mov
ON ofc.movie_id = mov.id
WHERE ofc.international_sales > ofc.domestic_sales;

SELECT mov.title, ofc.rating FROM box_office AS ofc
INNER JOIN movies AS mov
ON ofc.movie_id = mov.id
ORDER BY mov.title DESC;

SELECT tht.id, tht.name, tht.location, mov.title, mov.director, mov.`year`, mov.length_minutes FROM theater AS tht
LEFT JOIN movies AS mov
ON tht.id = mov.theater_id
ORDER BY tht.name;

SELECT tht.id, tht.name, tht.location, mov.title, mov.director, mov.`year`, mov.length_minutes FROM theater AS tht
RIGHT JOIN movies AS mov
ON tht.id = mov.theater_id
ORDER BY tht.name;

SELECT mov.id, mov.title, mov.director, mov.`year`, mov.length_minutes, mov.theater_id, ofc.rating, tht.name AS theater_name FROM movies AS mov
INNER JOIN theater AS tht
ON tht.id = mov.theater_id
INNER JOIN box_office AS ofc
ON ofc.movie_id = mov.id
WHERE ofc.rating > 8;










