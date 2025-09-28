🤖 Tech Stack Catalog

A dynamic web application built with Node.js, Express, and PostgreSQL to catalog and display technology stacks. This project is a perfect showcase for a computer science student, like yourself at UA, learning full-stack web development.

✨ Features
View Technologies & Categories: Browse a clean, card-based layout of all technologies and their corresponding categories.

Dynamic Filtering: Click on a category to see a filtered list of all technologies belonging to it.

Add New Technologies: A user-friendly form allows for the addition of new technologies to the database.

SVG File Uploads: Users can upload SVG logos for new technologies, which are securely handled and stored on the server.

RESTful Routing: The application follows REST principles for a clean, predictable API structure.

Responsive Design: The interface is built with Tailwind CSS for a seamless experience on both desktop and mobile devices.

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: PostgreSQL

Frontend: EJS (Embedded JavaScript templates), Tailwind CSS

File Handling: Multer for handling multipart/form-data (file uploads)

Environment Variables: dotenv for managing configuration

📂 Project Structure
The codebase is organized following the Model-View-Controller (MVC) pattern to ensure a clean separation of concerns.

/
├── public/               # Static assets (images, stylesheets)
│   ├── javascript.svg
│   └── ...
├── db/                   # Database-related files
│   ├── pool.js           # PostgreSQL connection pool
│   └── queries.js        # All SQL query functions
├── routes/               # Express router files (Controllers)
│   ├── home.js
│   ├── categories.js
│   └── technologies.js
├── views/                # EJS template files (Views)
│   ├── partials/         # Reusable EJS partials (header, footer)
│   ├── home.ejs
│   ├── categories.ejs
│   ├── technologies.ejs
│   └── new-tech-form.ejs
├── .env                  # Environment variables (DATABASE_URL)
├── app.js                # Main Express application file
├── populatedb.js         # Script to seed the database
└── package.json

🚀 Setup and Installation
Clone the Repository

git clone [https://github.com/your-username/tech-stack-catalog.git](https://github.com/your-username/tech-stack-catalog.git)
cd tech-stack-catalog

Install Dependencies

npm install

Set Up Environment Variables
Create a file named .env in the root of the project and add your PostgreSQL connection string:

DATABASE_URL=postgresql://user:password@localhost:5432/yourdatabase

Create and Seed the Database
Make sure you have a PostgreSQL database created with the name you specified in the .env file. Then, run the seed script:

node populatedb.js

▶️ Usage
Once the setup is complete, you can start the Express server:

npm start

The application will be running at http://localhost:3000.

🔮 Future Improvements
Edit & Delete: Implement functionality to edit or delete existing technologies and categories.

User Authentication: Add a login system so that only authenticated users can add or modify data.

Search Functionality: Add a search bar to quickly find technologies by name.

Deployment: Deploy the application to a cloud service like Heroku or Vercel.

