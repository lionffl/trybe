SELECT * FROM sakila.customer;

SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT * FROM sakila.customer;

SELECT email, address_id FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY first_name;

SELECT * FROM sakila.payment;

SELECT COUNT(payment_id) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01'
ORDER BY payment_date;

SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

SELECT title, rating FROM sakila.film
WHERE rating IN ('PG-13', 'PG', 'G')
ORDER BY title
LIMIT 500;