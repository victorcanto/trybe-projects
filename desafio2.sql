-- 2 - Exiba os cargos com seu nível de renumeração associado, com base no salário máximo do cargo
SELECT 
	JOB_TITLE AS 'Cargo', 
    CASE 
		WHEN MAX_SALARY BETWEEN 5000 AND 10000 THEN 'Baixo'
        WHEN MAX_SALARY BETWEEN 10001 AND 20000 THEN 'Médio'
        WHEN MAX_SALARY BETWEEN 20001 AND 30000 THEN 'Alto'
        ELSE 'Altíssimo'
	END AS 'Nível'
FROM hr.jobs ORDER BY JOB_TITLE;
