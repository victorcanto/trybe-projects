-- 12 - Faça um relatório que lista todas as pessoas funcionárias que possuem o mesmo cargo
SELECT
  CONCAT(
    employees_1.FIRST_NAME,
    ' ',
    employees_1.LAST_NAME
  ) AS 'Nome completo funcionário 1',
  employees_1.SALARY AS 'Salário funcionário 1',
  employees_1.PHONE_NUMBER AS 'Telefone funcionário 1',
  CONCAT(
    employees_2.FIRST_NAME,
    ' ',
    employees_2.LAST_NAME
  ) AS 'Nome completo funcionário 2',
  employees_2.SALARY AS 'Salário funcionário 2',
  employees_2.PHONE_NUMBER AS 'Telefone funcionário 2'
FROM
  hr.employees AS employees_1,
  hr.employees AS employees_2
WHERE
  employees_1.JOB_ID = employees_2.JOB_ID
  AND (
    CONCAT(
      employees_1.FIRST_NAME,
      ' ',
      employees_1.LAST_NAME
    ) NOT LIKE CONCAT(
      employees_2.FIRST_NAME,
      ' ',
      employees_2.LAST_NAME
    )
  )
ORDER BY
  `Nome completo funcionário 1`,
  `Nome completo funcionário 2`;
