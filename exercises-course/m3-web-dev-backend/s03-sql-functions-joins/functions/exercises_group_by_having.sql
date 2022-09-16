USE sakila;

SELECT active, COUNT(customer_id)
FROM customer
GROUP BY active;

SELECT store_id, active AS 'customer_status', COUNT(customer_id) AS 'customer_entries'
FROM customer
GROUP BY store_id, active;

SELECT * FROM film;

SELECT rating, AVG(rental_duration)
FROM film
GROUP BY rating;

SELECT district, COUNT(*) AS 'districts_entries' FROM address
WHERE district != ''
GROUP BY district
ORDER BY districts_entries DESC;

SELECT rating, AVG(length) AS 'average_duration'
FROM film
GROUP BY rating
HAVING average_duration BETWEEN 115 AND 121.50
ORDER BY average_duration DESC;

SELECT rating, SUM(replacement_cost) AS 'replacement_cost_total'
FROM film
GROUP BY rating
HAVING replacement_cost_total > 3950.50
ORDER BY replacement_cost_total;
