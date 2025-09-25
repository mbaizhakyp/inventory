const pool = require("./pool");

async function getAllTechnologies() {
  const { rows } = await pool.query(
    "SELECT tech_id, name, description, website_url, initial_release_year, logo_url FROM Technologies ORDER BY name"
  );
  return rows;
}
async function getAllCategories() {
  const { rows } = await pool.query(
    "SELECT category_id, name, description, logo_url FROM Categories ORDER BY name"
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

module.exports = {
  getAllTechnologies,
  getAllCategories,
  getTechnologiesByCategory,
};
