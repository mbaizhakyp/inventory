const { Client } = require("pg");
require("dotenv").config();

const SQL = `
DROP TABLE IF EXISTS Technologies;
DROP TABLE IF EXISTS Categories;

CREATE TABLE Categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    logo_url VARCHAR(255) -- Stores the local path to the SVG logo
);

CREATE TABLE Technologies (
    tech_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    website_url VARCHAR(255),
    initial_release_year INT,
    category_id INT,
    logo_url VARCHAR(255), -- Stores the local path to the SVG logo
    CONSTRAINT fk_category
        FOREIGN KEY(category_id)
        REFERENCES Categories(category_id)
        ON DELETE SET NULL
);

INSERT INTO Categories (name, description, logo_url) VALUES
('Programming Language', 'The foundation for creating applications.', 'category-language.svg'),
('Frontend Framework/Library', 'Tools for building user interfaces.', 'category-frontend.svg'),
('Backend Framework/Library', 'Tools for building the server-side of applications.', 'category-backend.svg'),
('Database', 'Systems for storing, retrieving, and managing data.', 'category-database.svg'),
('Runtime Environment', 'The environment where code is executed.', 'category-runtime.svg');

-- All logo_url values now point to a local path.
-- You will need to create these SVG files in your public directory.
INSERT INTO Technologies (name, description, website_url, initial_release_year, category_id, logo_url) VALUES
('JavaScript', 'A high-level, dynamic programming language, essential for web development.', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 1995, 1, 'javascript.svg'),
('Python', 'A versatile language known for its readability, used in web dev, data science, and more.', 'https://www.python.org', 1991, 1, 'python.svg'),
('Java', 'A class-based, object-oriented language widely used in enterprise-level applications.', 'https://www.java.com', 1995, 1, 'java.svg'),
('C#', 'A modern, object-oriented language developed by Microsoft, popular for game and web development.', 'https://docs.microsoft.com/en-us/dotnet/csharp/', 2000, 1, 'csharp.svg'),
('C++', 'A powerful, high-performance language often taught in foundational CS courses.', 'https://isocpp.org', 1985, 1, 'cpp.svg'),
('React', 'A JavaScript library for building user interfaces, maintained by Facebook.', 'https://reactjs.org', 2013, 2, 'react.svg'),
('Vue.js', 'A progressive JavaScript framework for building user interfaces.', 'https://vuejs.org', 2014, 2, 'vue.svg'),
('Angular', 'A platform and framework for building single-page client applications using HTML and TypeScript.', 'https://angular.io', 2016, 2, 'angular.svg'),
('Node.js', 'A JavaScript runtime built on Chrome''s V8 engine, allowing JS to run on the server.', 'https://nodejs.org', 2009, 5, 'nodejs.svg'),
('Express.js', 'A minimal and flexible Node.js web application framework.', 'https://expressjs.com', 2010, 3, 'express.svg'),
('PostgreSQL', 'A powerful, open-source object-relational database system.', 'https://www.postgresql.org', 1996, 4, 'postgresql.svg'),
('MongoDB', 'A source-available cross-platform document-oriented database program.', 'https://www.mongodb.com', 2009, 4, 'mongodb.svg'),
('SQLite', 'A C-language library that implements a small, fast, self-contained SQL database engine.', 'https://www.sqlite.org', 2000, 4, 'sqlite.svg');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

