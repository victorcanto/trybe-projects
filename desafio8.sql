-- 8 - Exibe todas as pessoas consumidoras cujos pedidos já foram enviados pelas empresas "Speedy Express" ou "United Package"
SELECT
  customers.ContactName AS 'Nome de contato',
  (shippers.ShipperName) AS 'Empresa que fez o envio',
  DATE(orders.OrderDate) AS 'Data do pedido'
FROM
  w3schools.customers AS customers
  INNER JOIN w3schools.orders AS orders ON customers.CustomerID = orders.CustomerID
  INNER JOIN w3schools.shippers AS shippers ON orders.ShipperID = shippers.ShipperID
WHERE
  shippers.ShipperID != 3
ORDER BY
  customers.ContactName,
  shippers.ShipperName,
  DATE(orders.OrderDate) ASC;
