-- 19 - Crie uma função chamada exibir_quantidade_pessoas_contratadas_por_mes_e_ano no banco de dados hr que, dados o mês e ano como parâmetros nessa ordem, retorna a quantidade de pessoas funcionárias que foram contratadas nesse mês e ano
USE hr;
DELIMITER $$ 
CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes INT, ano INT) 
RETURNS INT READS SQL DATA 
BEGIN DECLARE qtd_hired_people INT;
SELECT
  COUNT(*)
FROM
  employees
WHERE
  MONTH(HIRE_DATE) = mes
  AND YEAR(HIRE_DATE) = ano
ORDER BY
  EMPLOYEE_ID INTO qtd_hired_people;
RETURN qtd_hired_people;
END $$ DELIMITER ;
