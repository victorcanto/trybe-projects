DELIMITER $$ 

CREATE FUNCTION quantidade_musicas_no_historico(id VARCHAR(50)) 
RETURNS INT READS SQL DATA 
BEGIN 
DECLARE qtd_songs INT;
SELECT
  COUNT(re.fk_song_id)
FROM
  SpotifyClone.reproduction_history AS re
  INNER JOIN SpotifyClone.users AS us ON re.fk_user_id = us.user_id
WHERE
  us.name = id INTO qtd_songs;
RETURN qtd_songs;
END $$ 

DELIMITER ;
