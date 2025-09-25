const express = require('express');
const router = express.Router();
const db = require("../db/queries");

router.get("/", async (req, res) => {
  try {
    const allCategories = await db.getAllCategories();
    const viewData = allCategories.map(category => ({
      name: category.name,
      description: category.description,
      url: `/categories/${category.category_id}`
    }));

    console.log(viewData);

    res.render("categories", {
        title: "All Categories",
        categories: viewData
    });

  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  const categoryId = req.params.id;
  try {
    const technologies = await db.getTechnologiesByCategory(categoryId);
    const viewData = technologies.map(tech => ({
      name: tech.name,
      description: tech.description,
      website_url: tech.website_url,
      initial_release_year: tech.initial_release_year
    }));
    console.log(viewData);
    res.render("technologies", { title: "Technologies in Category", technologies: viewData });
  } catch (err) {
    console.error("Error fetching technologies by category:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;