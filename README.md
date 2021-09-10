# books-gql

A GraphQL implementation with NodeJS

## How to use

1. There are two branch in this project:

- choose `local-storage` for GraphQL implementation with local storage.
- choose `master` for GraphQL implementation with actual database.

2. Clone this repository into your local machine.

3. Install all libraries with `npm install`.

4. If `master` branch is cloned, create a new database called `booksdb` then create a new table called `books` and `users`.

```sql
CREATE DATABASE booksdb;
```

```sql
USE booksdb;
-- create new books table
CREATE TABLE books(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    is_read BOOLEAN
);

-- create new users table
CREATE TABLE users(
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);
```

5. Configure the database connection in `.env` file, the example can be seen in `.env.example`.

6. Start the GraphQL server with `npm start`.
