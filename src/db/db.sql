USE crudforms;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  user_password VARCHAR(20), 
  email VARCHAR(60) NOT NULL,
  PRIMARY KEY(id),
  UNIQUE(email)
);