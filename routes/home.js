const { Router } = require("express");
const homeRouter = Router();

homeRouter.get("/", (req, res) => {
  res.render("home", { title: "Home", currentPage: 'Home' });
});

module.exports = homeRouter;