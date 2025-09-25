const pool = require("./pool");

async function getAllTechnologies() {
  const { rows } = await pool.query(
    "SELECT tech_id, name, description, website_url, initial_release_year, logo_url FROM Technologies ORDER BY name"
  );
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query(
    "SELECT category_id, name, description FROM Categories ORDER BY name"
  );
  return rows;
}

async function getTechnologiesByCategory(categoryId) {
  const { rows } = await pool.query(
    "SELECT tech_id, name, description, website_url, initial_release_year, logo_url FROM Technologies WHERE category_id = $1 ORDER BY name",
    [categoryId]
  );
  return rows;
}

async function getCategoryById(id) {
    const { rows } = await pool.query(
        "SELECT * FROM Categories WHERE category_id = $1",
        [id]
    );
    return rows[0];
}

// This is the updated function for creating a new technology.
// It's safer and more robust than the previous version.
async function createTechnology(techData) {
  const {
    name,
    description,
    website_url,
    initial_release_year,
    logo_url, // This will be the filename from Multer, or undefined
    category_id,
  } = techData;

  const query = {
    text: `
      INSERT INTO Technologies (name, description, website_url, initial_release_year, logo_url, category_id)
      VALUES ($1, $2, $3, $4, $5, $6)
    `,
    // Use '|| null' to ensure that if a value is missing (like release year or logo),
    // we insert a proper SQL NULL instead of 'undefined'.
    values: [
      name,
      description,
      website_url || null,
      initial_release_year || null,
      logo_url || null,
      category_id,
    ],
  };
  await pool.query(query);
}


module.exports = {
  getAllTechnologies,
  getAllCategories,
  getTechnologiesByCategory,
  getCategoryById,
  createTechnology, // Make sure to export the new function
};

