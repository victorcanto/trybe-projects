-- 15 - Crie uma procedure chamada buscar_media_por_cargo que recebe como parâmetro o nome de um cargo e em retorno deve mostrar a média salarial de todas as pessoas que possuem esse cargo
USE hr;
DELIMITER $ $;
CREATE PROCEDURE buscar_media_por_cargo(IN nome_cargo VARCHAR(50)) 
BEGIN
SELECT
  ROUND(AVG(employees.SALARY), 2) AS 'Média salarial'
FROM
  hr.employees AS employees
  INNER JOIN hr.jobs AS jobs ON employees.JOB_ID = jobs.JOB_ID
WHERE
  jobs.JOB_TITLE LIKE nome_cargo;
END $ $ DELIMITER;
