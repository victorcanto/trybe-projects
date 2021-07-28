-- 7 - Faça um relatório que mostra o histórico de cargos das pessoas empregadas que iniciaram seus cargos nos meses de janeiro, fevereiro ou março
SELECT
  UCASE(CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME)) AS 'Nome completo',
  jh.START_DATE AS 'Data de início',
  e.SALARY AS 'Salário'
FROM
  hr.employees AS e
  INNER JOIN hr.job_history jh ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
WHERE
  MONTH(jh.START_DATE) BETWEEN 1
  AND 3
ORDER BY
  UCASE(CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME)),
  jh.START_DATE ASC;
