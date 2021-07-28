-- 3 - Exiba os cargos com a diferença entre seus salários máximo e mínimo
SELECT JOB_TITLE AS 'Cargo', (MAX_SALARY - MIN_SALARY) AS 'Diferença entre salários máximo e mínimo' 
FROM hr.jobs ORDER BY (MAX_SALARY - MIN_SALARY) ASC, JOB_TITLE;
