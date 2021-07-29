-- 9 - Exibe todos as pessoas funcionárias que já realizaram algum pedido, mostrando também seu total de pedidos feitos
SELECT
  CONCAT(employees.FirstName, ' ', employees.LastName) AS 'Nome completo',
  COUNT(*) AS 'Total de pedidos'
FROM
  w3schools.employees AS employees
  INNER JOIN w3schools.orders AS orders ON employees.EmployeeID = orders.EmployeeID
GROUP BY
  `Nome completo`
ORDER BY
  `Total de pedidos`;
