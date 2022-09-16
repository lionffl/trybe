select * from sakila.film;

select title, release_year, rating from sakila.film;

select count(film_id) from sakila.film;

select * from sakila.actor;

select distinct(last_name) from sakila.actor;

select count(distinct(last_name)) from sakila.actor;

select count(*) from sakila.actor;

select * from sakila.actor
order by last_name desc, first_name asc;

select * from sakila.language;

select * from sakila.language where name <> 'english';

select * from sakila.film;

select title, release_year, length, rating, replacement_cost from sakila.film
order by length desc, replacement_cost asc limit 20;