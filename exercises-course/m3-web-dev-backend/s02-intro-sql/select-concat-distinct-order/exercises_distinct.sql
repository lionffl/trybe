-- CREATE DATABASE Escola;
-- CREATE TABLE IF NOT EXISTS Escola.Estudantes (
--     nome VARCHAR(7) CHARACTER SET utf8,
--     idade INT
-- );
-- INSERT INTO Escola.Estudantes VALUES
--     ('Rafael', 25),
--     ('Amanda', 30),
--     ('Roberto', 45),
--     ('Carol', 19),
--     ('Amanda', 25);

select * from Escola.Estudantes;

select distinct nome, idade from Escola.Estudantes;

select distinct nome from Escola.Estudantes;

select distinct idade from Escola.Estudantes;