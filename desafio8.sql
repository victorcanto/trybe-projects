DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON SpotifyClone.users
FOR EACH ROW
BEGIN
DELETE FROM SpotifyClone.following_artists WHERE fk_user_id = OLD.user_id;
DELETE FROM SpotifyClone.reproduction_history WHERE fk_user_id = OLD.user_id;
END $$

DELIMITER ;
