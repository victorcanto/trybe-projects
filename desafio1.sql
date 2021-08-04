DROP DATABASE IF EXISTS SpotifyClone;
CREATE DATABASE SpotifyClone;
USE SpotifyClone;
CREATE TABLE plans(
  plan_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  value DECIMAL(3, 2) NOT NULL
) ENGINE = InnoDB;
CREATE TABLE users(
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  fk_plan_id INT NOT NULL,
  FOREIGN KEY (fk_plan_id) REFERENCES plans(plan_id)
) ENGINE = InnoDB;
CREATE TABLE artists(
  artist_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
) ENGINE = InnoDB;
CREATE TABLE albums(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  fk_artist_id INT NOT NULL,
  FOREIGN KEY (fk_artist_id) REFERENCES artists(artist_id)
) ENGINE = InnoDB;
CREATE TABLE songs(
  song_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  fk_album_id INT NOT NULL,
  FOREIGN KEY (fk_album_id) REFERENCES albums(album_id)
) ENGINE = InnoDB;
CREATE TABLE reproduction_history(
  fk_user_id INT NOT NULL,
  fk_song_id INT NOT NULL,
  PRIMARY KEY(fk_user_id, fk_song_id),
  FOREIGN KEY (fk_user_id) REFERENCES users(user_id),
  FOREIGN KEY (fk_song_id) REFERENCES songs(song_id)
) ENGINE = InnoDB;
CREATE TABLE following_artists(
  fk_user_id INT NOT NULL,
  fk_artist_id INT NOT NULL,
  PRIMARY KEY(fk_user_id, fk_artist_id),
  FOREIGN KEY (fk_user_id) REFERENCES users(user_id),
  FOREIGN KEY (fk_artist_id) REFERENCES artists(artist_id)
) ENGINE = InnoDB;
INSERT INTO
  plans(name, value)
VALUES
  ('gratuito', 0),
  ('familiar', 7.99),
  ('universitário', 5.99);
INSERT INTO
  users(name, age, fk_plan_id)
VALUES
  ('Thati', 23, 1),
  ('Cintia', 35, 2),
  ('Bill', 20, 3),
  ('Roger', 45, 1);
INSERT INTO
  artists(name)
VALUES
  ('Walter Phoenix'),
  ('Peter Strong'),
  ('Lance Day'),
  ('Freedie Shannon');
INSERT INTO
  albums(name, fk_artist_id)
VALUES
  ('Envious', 1),
  ('Exuberant', 1),
  ('Hallowed Steam', 2),
  ('Incandescent', 3),
  ('Temporary Culture', 4);
INSERT INTO
  songs(name, fk_album_id)
VALUES
  ('Soul For Us', 1),
  ('Reflections Of Magic', 1),
  ('Dance With Her Own', 1),
  ('Troubles Of My Inner Fire', 1),
  ('Time Fireworks', 1),
  ('Magic Circus', 2),
  ('Honey, So Do I', 2),
  ("Sweetie, Let's Go Wild", 2),
  ('She Knows', 2),
  ('Fantasy For Me', 3),
  ('Celebration Of More', 3),
  ('Rock His Everything', 3),
  ('Home Forever', 3),
  ('Diamond Power', 3),
  ("Honey, Let's Be Silly", 4),
  ('Thang Of Thunder', 4),
  ('Words Of Her Life', 4),
  ('Without My Streets', 4);
INSERT INTO
  reproduction_history(fk_user_id, fk_song_id)
VALUES
  (1, 1),
  (1, 6),
  (1, 14),
  (1, 16),
  (2, 13),
  (2, 17),
  (2, 2),
  (2, 15),
  (3, 4),
  (3, 16),
  (3, 6),
  (4, 3),
  (4, 18),
  (4, 11);
INSERT INTO
  following_artists(fk_user_id, fk_artist_id)
VALUES
  (1, 1),
  (1, 4),
  (1, 3),
  (2, 1),
  (2, 3),
  (3, 2),
  (3, 1),
  (4, 4);
