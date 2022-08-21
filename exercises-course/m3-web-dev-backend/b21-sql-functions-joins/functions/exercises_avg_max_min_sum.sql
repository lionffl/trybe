USE sakila;

SELECT * FROM film;

SELECT AVG(`length`) AS 'average_length',
MIN(`length`) AS 'min_length',
MAX(`length`) AS 'max_length', 
SUM(`length`) AS 'exhibition_time',
COUNT(film_id) AS 'entries'
FROM film;

