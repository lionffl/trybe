USE hr;

SELECT * FROM employees;

SELECT e1.first_name AS employee, e2.first_name AS manager FROM employees AS e1
INNER JOIN employees AS e2
ON e1.manager_id = e2.employee_id
WHERE e1.department_id != e2.department_id;

SELECT e2.first_name AS manager, COUNT(e1.employee_id) AS employees FROM employees AS e1
INNER JOIN employees AS e2
ON e1.manager_id = e2.employee_id
GROUP BY manager
ORDER BY employees DESC;

