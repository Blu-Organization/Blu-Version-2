DROP DATABASE IF EXISTS bludb;

CREATE DATABASE bludb;

\c bludb;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  month SMALLINT NOT NULL,
  day SMALLINT NOT NULL,
  year SMALLINT NOT NULL
);

CREATE TABLE teams (
  teamname VARCHAR(255) NOT NULL,
  teamimage VARCHAR(555) NOT NULL,
  tagname VARCHAR(255) NOT NULL,
  teammembers SMALLINT NOT NULL,
  teamrating SMALLINT NOT NULL,
  teamrank VARCHAR(255) NOT NULL,
  teamwins SMALLINT NOT NULL
);