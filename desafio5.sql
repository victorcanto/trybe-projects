-- 5 - Exiba os cargos com sua variação salarial e suas médias máxima e mínima mensal, considerando salários máximo e minímo como anuais
SELECT 
	j.JOB_TITLE AS 'Cargo', 
    (MAX_SALARY - MIN_SALARY) AS 'Variação Salarial', 
	ROUND((AVG(MIN_SALARY)/12), 2) AS 'Média mínima mensal',
    ROUND((AVG(MAX_SALARY)/12), 2) AS 'Média máxima mensal'
FROM hr.jobs AS j
INNER JOIN hr.employees AS e
ON j.JOB_ID = e.JOB_ID
GROUP BY e.JOB_ID ORDER BY (MAX_SALARY - MIN_SALARY) ASC, j.JOB_TITLE;
