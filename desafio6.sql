CREATE VIEW faturamento_atual AS
SELECT
  ROUND(MIN(value), 2) AS faturamento_minimo,
  ROUND(MAX(value), 2) AS faturamento_maximo,
  ROUND(AVG(value), 2) AS faturamento_medio,
  ROUND(SUM(value), 2) AS faturamento_total
FROM
  SpotifyClone.plans AS pl
  INNER JOIN SpotifyClone.users AS us ON pl.plan_id = us.fk_plan_id;
