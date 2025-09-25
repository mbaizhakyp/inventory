const express = require("express");
const router = express.Router();
const db = require("../db/queries");

router.get("/", async (req, res) => {
  try {
    const allCategories = await db.getAllCategories();
    const viewData = allCategories.map((category) => ({
      name: category.name,
      description: category.description,
      url: `/technologies/${category.category_id}`,
    }));

    console.log(viewData);

    res.render("categories", {
      title: "All Categories",
      categories: viewData,
      currentPage: "Categories",
    });
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
