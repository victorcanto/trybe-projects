-- 14 - Considerando o conjunto formado pelas pessoas consumidoras e empresas fornecedoras de produtos, queremos saber quais são os cinco primeiros países distintos, em ordem alfabética, presentes nesse conjunto
(
  SELECT
    Country AS 'País'
  FROM
    w3schools.customers
)
UNION
  (
    SELECT
      Country
    FROM
      w3schools.suppliers
  )
ORDER BY
  `País`
LIMIT
  5;
