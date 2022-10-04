-- Your SQL goes here
CREATE TABLE users (
  id VARCHAR PRIMARY KEY,
  created_at BIGINT NOT NULL,
  email VARCHAR NOT NULL,
  username VARCHAR NOT NULL DEFAULT 'f'
);