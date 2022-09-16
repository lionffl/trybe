USE hr;

SELECT * FROM employees;

SELECT MAX(salary) FROM employees;

SELECT MIN(salary) FROM employees;

SELECT MAX(salary) - MIN(salary) FROM employees;

SELECT job_id, AVG(salary) AS average_salary FROM employees
GROUP BY job_id
ORDER BY average_salary DESC;

SELECT SUM(salary) FROM employees;

SELECT 
ROUND(MAX(salary), 2) AS greater_salary, 
ROUND(MIN(salary), 2) AS minor_salary,
ROUND(SUM(salary), 2) AS total_salary, 
ROUND(AVG(salary), 2) AS average_salary
FROM employees;

SELECT COUNT(job_id) FROM employees WHERE job_id = 'it_prog';

SELECT job_id, SUM(salary) AS total_salary, count(job_id) AS employees_entries FROM employees
GROUP BY job_id;

SELECT job_id, SUM(salary) AS total_salary_but_it FROM employees WHERE job_id != 'it_prog'
GROUP BY job_id
ORDER BY total_salary_but_it DESC;

SELECT AVG(salary), COUNT(job_id) AS employees_entries FROM employees
GROUP BY department_id
HAVING employees_entries > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

SELECT * FROM employees WHERE CHAR_LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) FROM employees;

SELECT employee_id, first_name, DAY(hire_date) FROM employees;

SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS full_name FROM employees;

SELECT last_name, hire_date FROM employees 
WHERE MONTH(hire_date) = 7 
AND YEAR(hire_date) = 1987;

SELECT DATE(NOW());

SELECT first_name, last_name, DATEDIFF(DATE(NOW()), hire_date) AS days_hired FROM employees;