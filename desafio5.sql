CREATE VIEW top_2_hits_do_momento AS
SELECT
  (
    SELECT
      name
    FROM
      SpotifyClone.songs
    WHERE
      song_id = re.fk_song_id
  ) AS cancao,
  (
    SELECT
      COUNT(re.fk_user_id)
  ) AS reproducoes
FROM
  SpotifyClone.reproduction_history AS re
GROUP BY
  cancao
ORDER BY
  reproducoes DESC,
  cancao
LIMIT
  2;
