-- 16 - Crie uma função chamada buscar_quantidade_de_empregos_por_funcionario no banco de dados hr que, ao receber o email de uma pessoa funcionária, retorne a quantidade de empregos presentes em seu histórico
USE hr;
DELIMITER $ $;
CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(50)) RETURNS INT READS SQL DATA BEGIN DECLARE qtd_jobs INT
SELECT
  COUNT(*)
FROM
  hr.job_history AS jh
  INNER JOIN hr.employees AS e ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
WHERE
  e.EMAIL LIKE email INTO qtd_jobs;
RETURN qtd_jobs;
END $ $ DELIMITER;
