USE sakila;

SELECT film_id, title, 
	IF (title = 'ACE GOLDFINGER', 'Watched', 'Not Watched') AS 'Did I Watch?'
FROM film;

SELECT title, rating,
	CASE
		WHEN rating = 'G'		THEN 'All ages admitted - General Audiences'
		WHEN rating = 'PG'		THEN 'Not recommended for minor 10'
		WHEN rating = 'PG-13'	THEN 'Not recommended for minor 13'
		WHEN rating = 'R'		THEN 'Not recommened for minor 17'
	ELSE 'Adults only'
END AS 'audience age'
FROM film;