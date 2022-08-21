CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    specie VARCHAR(15) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    age INT NOT NULL,
    location VARCHAR(20) NOT NULL
);

CREATE TABLE employee(
	employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    responsible_for VARCHAR(50) NOT NULL,
    manager_id INT NOT NULL
);

CREATE TABLE animal_employee(
	employee_id INT NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id)
);

SELECT * FROM animal;

DELETE FROM animal
WHERE animal_id = 1;

INSERT INTO animal (name, specie, gender, age, location)
VALUES 
	('Simba', 'lion', 'male', 20, 'africa'),
	('Nala', 'lion', 'female', 18, 'africa'); 

DROP DATABASE zoo;