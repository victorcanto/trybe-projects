DELIMITER $$ 

CREATE FUNCTION quantidade_musicas_no_historico(id INT) 
RETURNS INT READS SQL DATA 
BEGIN 
DECLARE qtd_songs INT;
SELECT
  COUNT(fk_song_id)
FROM
  SpotifyClone.reproduction_history AS re
WHERE
  re.fk_user_id = id INTO qtd_songs;
RETURN qtd_songs;
END $$ 

DELIMITER;
