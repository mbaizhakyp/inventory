const { Router } = require("express");
const technologiesRouter = Router();
const db = require("../db/queries");

technologiesRouter.get("/", async (req, res) => {
  try{
    const allTech = await db.getAllTechnologies();
    const viewData = allTech.map(tech => ({
      name: tech.name,
      description: tech.description,
      website_url: tech.website_url,
      initial_release_year: tech.initial_release_year
    }));
    console.log(viewData);
    res.render("technologies", { title: "All Technologies", technologies: viewData });
  } catch (err) {
    console.error("Error fetching technologies:", err);
    res.status(500).send("Internal Server Error");
  }
  
});

module.exports = technologiesRouter;