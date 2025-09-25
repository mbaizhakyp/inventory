const pool = require("./pool");

async function getAllTechnologies() {
    const { rows } = await pool.query("SELECT * FROM Technologies");
    return rows;
}

async function getTechnologiesByCategory(categoryId) {
    const { rows } = await pool.query(
        "SELECT * FROM Technologies WHERE category_id = $1",
        [categoryId]
    );
    return rows;
}

module.exports = {
    getAllTechnologies,
    getTechnologiesByCategory,
}