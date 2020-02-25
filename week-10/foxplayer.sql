CREATE TABLE playlist(
  id INT NOT NULL AUTO_INCREMENT,
  playlist TINYTEXT,
  system TINYINT(1),
  PRIMARY KEY(id)
);


CREATE TABLE tracks(
  id INT NOT NULL AUTO_INCREMENT,
  path TINYTEXT,
  playlist_id INT,
  PRIMARY KEY(id)
);
