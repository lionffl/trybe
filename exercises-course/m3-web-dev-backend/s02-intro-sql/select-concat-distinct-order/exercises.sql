select 'This is SQL Exercise, Practice and Solution';

select 1 as 'number 1', 2 as 'number 2', 3 as 'number 3';

select 10 + 15;

select (2+2/2);

select * from Scientists;

select * from Scientists.Projects;

select name as 'nome_do_projeto', hours as 'tempo_de_trabalho' from Scientists.Projects;

select * from Scientists
ORDER by name;

select * from Scientists.Projects
ORDER by name DESC;

select 'O projeto ', name, ' precisou de ', hours, ' para ser concluido.' from Scientists.Projects;

select * from Scientists.Projects
ORDER by hours DESC limit 3;

select distinct(project) from Scientists.AssignedTo;

select * from Scientists.Projects
ORDER by hours DESC limit 1;

select max(hours) from Scientists.Projects
where hours not in (select max(hours) from Scientists.Projects);

select * from Scientists.Projects
ORDER by hours ASC limit 5;

select 'Existem ', count(distinct(name)) as a, 'cientistas na tabela Scientists.' from Scientists;
