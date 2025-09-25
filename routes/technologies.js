const { Router } = require("express");
const router = Router();
const db = require("../db/queries");

router.get("/", async (req, res) => {
  try{
    const allTech = await db.getAllTechnologies();
    const viewData = allTech.map(tech => ({
      name: tech.name,
      description: tech.description,
      website_url: tech.website_url,
      initial_release_year: tech.initial_release_year,
      logo_url: tech.logo_url
    }));
    console.log(viewData);
    res.render("technologies", { title: "All Technologies", technologies: viewData, currentPage: 'Technologies' });
  } catch (err) {
    console.error("Error fetching technologies:", err);
    res.status(500).send("Internal Server Error");
  }
  
});

router.get("/:id", async (req, res) => {
  const categoryId = req.params.id;
  try {
    const allTech = await db.getTechnologiesByCategory(categoryId);
    const viewData = allTech.map(tech => ({
      name: tech.name,
      description: tech.description,
      website_url: tech.website_url,
      initial_release_year: tech.initial_release_year,
      logo_url: tech.logo_url ? `/${tech.logo_url}` : null,
    }));
    console.log(viewData);
    res.render("technologies", { title: "All Technologies", technologies: viewData, currentPage: 'Technologies' });
  } catch (err) {
    console.error("Error fetching technologies by category:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;