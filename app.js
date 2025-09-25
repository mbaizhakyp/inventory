const express = require("express");
const { join } = require("path");
const homeRouter = require("./routes/home");
const itemsRouter = require("./routes/items");
const categoriesRouter = require("./routes/categories");

const app = express();

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));
app.use("/", homeRouter);
app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});