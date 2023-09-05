

\c dogs_db;

CREATE TABLE IF NOT EXISTS User(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL
);
INSERT INTO User (username, password) VALUES ('admin', 'admin');

DROP TABLE IF EXISTS Dog CASCADE;
CREATE TABLE IF NOT EXISTS Dog(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    breed VARCHAR(50),
    img_base64 TEXT,
);
