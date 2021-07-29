-- 13 - Exibe todos produtos que já tiveram um pedido associado requerindo uma quantidade desse produto maior que 80
SELECT
  ProductName AS 'Produto',
  Price AS 'Preço'
FROM
  w3schools.products AS products
  INNER JOIN w3schools.order_details AS order_details ON products.ProductID = order_details.ProductID
WHERE
  order_details.Quantity > 80
ORDER BY
  `Produto`;
