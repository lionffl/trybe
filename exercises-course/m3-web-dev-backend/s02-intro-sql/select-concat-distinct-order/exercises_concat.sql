select * from sakila.film;

select concat(title, ' released in ', release_year) as released from sakila.film;

select concat(title, ' only for ', rating) as classification from sakila.film;

select * from sakila.address;

select concat(address, ', ', district) as full_address from sakila.address;