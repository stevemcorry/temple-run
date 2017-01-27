CREATE TABLE users (
    id SERIAL,
    email NOT NULL UNIQUE,
    pass NOT NULL UNIQUE
);

CREATE TABLE images (
    id SERIAL,
    user_id  INT REFERENCES users(id),
    url TEXT
)