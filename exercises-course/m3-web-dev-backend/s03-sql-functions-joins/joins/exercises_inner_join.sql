USE sakila;

SELECT a.actor_id, first_name, film_id, COUNT(film_id) AS films 
FROM actor AS a
INNER JOIN film_actor AS f_a
ON a.actor_id = f_a.actor_id
GROUP BY actor_id;

SELECT first_name, last_name, address
FROM staff AS stf
INNER JOIN address AS adr
ON adr.address_id = stf.address_id;

SELECT customer_id, first_name, email, ctm.address_id, address 
FROM customer AS ctm
INNER JOIN address AS adr
ON ctm.address_id = adr.address_id
ORDER BY first_name DESC
LIMIT 100;

SELECT first_name, email, ctm.address_id, address, district
FROM customer AS ctm 
INNER JOIN address AS adr
ON ctm.address_id = adr.address_id
WHERE ctm.first_name LIKE '%rene%' AND adr.district = 'California';

SELECT ctm.first_name, COUNT(adr.address_id) 
FROM customer AS ctm
INNER JOIN address AS adr
ON ctm.address_id = adr.address_id
WHERE  active = 1
GROUP BY ctm.customer_id
ORDER BY first_name DESC;

SELECT stf.first_name, stf.last_name, AVG(amount) AS average_payment
FROM staff AS stf
INNER JOIN payment AS pay
ON stf.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = '2006'
GROUP BY stf.staff_id;

SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM actor AS a
INNER JOIN film_actor as f_a
ON f_a.actor_id = a.actor_id
INNER JOIN film AS f
ON f.film_id = f_a.film_id;

