SELECT COUNT(rental_id) FROM sakila.rental
WHERE DATE(return_date) = '2005-05-25';

SELECT COUNT(rental_id) FROM sakila.rental
WHERE return_date LIKE '2005-05-25%';

SELECT COUNT(rental_id) FROM sakila.rental
WHERE DATE(return_date) BETWEEN '2005-07-01' AND '2005-08-22';

SELECT * FROM sakila.rental;

SELECT 
DATE(rental_date) AS 'date', 
YEAR(rental_date) AS 'year', 
MONTH(rental_date) AS 'month',
DAY(rental_date) AS 'day',
HOUR(rental_date) AS 'hour',
MINUTE(rental_date) AS 'minute', 
SECOND(rental_date) AS 'second'
FROM sakila.rental WHERE rental_id = 10330;

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >= '22';

