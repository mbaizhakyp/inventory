const { Router } = require("express");
const homeRouter = Router();

homeRouter.get("/", (req, res) => {
  res.send("home");
});

module.exports = homeRouter;