const { Router } = require("express");
const technologiesRouter = Router();

technologiesRouter.get("/", (req, res) => {
  res.send("technologies");
});

module.exports = technologiesRouter;