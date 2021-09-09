CREATE DATABASE booksdb;

USE booksdb;

CREATE TABLE books(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    is_read BOOLEAN
);

CREATE TABLE users(
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);