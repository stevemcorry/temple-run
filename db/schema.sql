CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    user TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    pass TEXT NOT NULL UNIQUE
);

CREATE TABLE images (
    id SERIAL,
    FOREIGN KEY user_id  INT REFERENCES users(id) NOT NULL,
    url TEXT NOT NULL,
    position INTEGER NOT NULL
)