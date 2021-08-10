DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(id INT) 
RETURNS INT READS SQL DATA 
BEGIN 
DECLARE qtd_songs INT;
SELECT
  COUNT(*)
FROM
  SpotifyClone.reproduction_history
WHERE
  fk_user_id = id INTO qtd_songs;
RETURN qtd_songs;
END $$ 

DELIMITER ;
