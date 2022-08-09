SELECT * FROM Scientists.Scientists
WHERE name LIKE '%e%';

SELECT name FROM Scientists.Projects
WHERE code LIKE 'a%'
ORDER BY name;

SELECT name, code FROM Scientists.Projects
WHERE code LIKE '%3%'
ORDER BY name;

SELECT scientist FROM Scientists.AssignedTo
WHERE project IN ('Che1', 'Ast3', 'AeH3');

SELECT * FROM Scientists.Projects
WHERE hours > 500;

SELECT * FROM Scientists.Projects
WHERE hours BETWEEN 251 AND 799;

SELECT name, code FROM Scientists.Projects
WHERE name NOT LIKE 'a%';

SELECT name, code FROM Scientists.Projects
WHERE code LIKE '%H%';
