CREATE VIEW historico_reproducao_usuarios AS
SELECT
  (
    SELECT
      name
    FROM
      SpotifyClone.users
    WHERE
      user_id = re.fk_user_id
  ) AS usuario,
  (
    SELECT
      name
    FROM
      SpotifyClone.songs
    WHERE
      song_id = re.fk_song_id
  ) AS nome
FROM
  SpotifyClone.reproduction_history AS re
ORDER BY
  usuario,
  nome;
