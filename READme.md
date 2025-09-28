<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Stack Catalog README</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;6-00;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9fafb;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 10px;
            margin-top: 24px;
            margin-bottom: 16px;
            color: #111827;
        }
        h1 {
            font-size: 2.25em;
            text-align: center;
        }
        h2 {
            font-size: 1.75em;
        }
        ul {
            list-style-type: disc;
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        code {
            font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
            background-color: #f3f4f6;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.9em;
            color: #4b5563;
        }
        pre {
            background-color: #1f2937;
            color: #d1d5db;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            font-size: 0.9em;
            line-height: 1.5;
        }
        pre code {
            background-color: transparent;
            padding: 0;
            color: inherit;
        }
        a {
            color: #4f46e5;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .header-p {
            text-align: center;
            font-size: 1.1em;
            color: #6b7280;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Tech Stack Catalog</h1>
        <p class="header-p">
            A dynamic web application built with Node.js, Express, and PostgreSQL to catalog and display technology stacks. A perfect project for a computer science student learning full-stack development.
        </p>

        <h2>Features</h2>
        <ul>
            <li><strong>View Technologies & Categories:</strong> Browse a clean, card-based layout of all technologies and their corresponding categories.</li>
            <li><strong>Dynamic Filtering:</strong> Click on a category to see a filtered list of all technologies belonging to it.</li>
            <li><strong>Add New Technologies:</strong> A user-friendly form allows for the addition of new technologies to the database.</li>
            <li><strong>SVG File Uploads:</strong> Users can upload SVG logos for new technologies, which are securely handled and stored on the server.</li>
            <li><strong>RESTful Routing:</strong> The application follows REST principles for a clean, predictable API structure.</li>
            <li><strong>Responsive Design:</strong> The interface is built with Tailwind CSS for a seamless experience on both desktop and mobile devices.</li>
        </ul>

        <h2>Tech Stack</h2>
        <ul>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> PostgreSQL</li>
            <li><strong>Frontend:</strong> EJS (Embedded JavaScript templates), Tailwind CSS</li>
            <li><strong>File Handling:</strong> Multer for handling multipart/form-data (file uploads)</li>
            <li><strong>Environment Variables:</strong> <code>dotenv</code> for managing configuration</li>
        </ul>

        <h2>Project Structure</h2>
        <p>The codebase is organized following the Model-View-Controller (MVC) pattern to ensure a clean separation of concerns.</p>
        <pre><code>/
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
└── package.json</code></pre>

        <h2>Setup and Installation</h2>
        <ol>
            <li>
                <strong>Clone the Repository</strong>
                <pre><code>git clone https://github.com/your-username/tech-stack-catalog.git
cd tech-stack-catalog</code></pre>
            </li>
            <li>
                <strong>Install Dependencies</strong>
                <pre><code>npm install</code></pre>
            </li>
            <li>
                <strong>Set Up Environment Variables</strong>
                <p>Create a file named <code>.env</code> in the root of the project and add your PostgreSQL connection string:</p>
                <pre><code>DATABASE_URL=postgresql://user:password@localhost:5432/yourdatabase</code></pre>
            </li>
            <li>
                <strong>Create and Seed the Database</strong>
                <p>Make sure you have a PostgreSQL database created with the name you specified in the <code>.env</code> file. Then, run the seed script:</p>
                <pre><code>node populatedb.js</code></pre>
            </li>
        </ol>

        <h2>Usage</h2>
        <p>Once the setup is complete, you can start the Express server:</p>
        <pre><code>npm start</code></pre>
        <p>The application will be running at <a href="http://localhost:3000">http://localhost:3000</a>.</p>

        <h2>Future Improvements</h2>
        <ul>
            <li><strong>Edit & Delete:</strong> Implement functionality to edit or delete existing technologies and categories.</li>
            <li><strong>User Authentication:</strong> Add a login system so that only authenticated users can add or modify data.</li>
            <li><strong>Search Functionality:</strong> Add a search bar to quickly find technologies by name.</li>
            <li><strong>Deployment:</strong> Deploy the application to a cloud service like Heroku or Vercel.</li>
        </ul>
    </div>
</body>
</html>
