DELIMITER $ $ CREATE PROCEDURE albuns_do_artista(IN artist_name VARCHAR(50)) BEGIN
SELECT
  ar.name AS artista,
  al.name AS album
FROM
  SpotifyClone.artists AS ar
  INNER JOIN SpotifyClone.albums AS al ON ar.artist_id = al.fk_artist_id
WHERE
  ar.name = artist_name
ORDER BY
  artist_name,
  album;
END $ $ DELIMITER;
