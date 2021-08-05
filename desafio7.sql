CREATE VIEW perfil_artistas AS
SELECT
  ar.name AS artista,
  al.name AS album,
  (
    SELECT
      COUNT(fk_user_id)
    FROM
      SpotifyClone.following_artists
    WHERE
      ar.artist_id = fk_artist_id
  ) AS seguidores
FROM
  SpotifyClone.artists AS ar
  INNER JOIN SpotifyClone.albums AS al ON ar.artist_id = al.fk_artist_id
ORDER BY
  seguidores DESC,
  artista;
