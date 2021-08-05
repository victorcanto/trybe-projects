CREATE VIEW top_3_artistas AS
SELECT
  (
    SELECT
      name
    FROM
      SpotifyClone.artists
    WHERE
      artist_id = fo.fk_artist_id
  ) AS artista,
  (
    SELECT
      COUNT(fo.fk_user_id)
  ) AS seguidores
FROM
  SpotifyClone.following_artists AS fo
GROUP BY
  artista
ORDER BY
  seguidores DESC,
  artista
LIMIT
  3;
