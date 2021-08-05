CREATE VIEW cancoes_premium AS
SELECT
  so.name AS nome,
  COUNT(re.fk_user_id) AS reproducoes
FROM
  SpotifyClone.users AS us
  INNER JOIN SpotifyClone.reproduction_history AS re ON us.user_id = re.fk_user_id
  INNER JOIN SpotifyClone.songs AS so ON re.fk_song_id = so.song_id
WHERE
  us.fk_plan_id = 2
  OR us.fk_plan_id = 3
GROUP BY
  nome
ORDER BY
  nome;
