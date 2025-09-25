const { Router } = require("express");
const router = Router();
const db = require("../db/queries");
const multer = require('multer');
const path = require('path');

// --- Multer Configuration ---
const storage = multer.diskStorage({
  // Tell Multer to save files in the 'public' folder
  destination: (req, file, cb) => {
    cb(null, 'public');
  },
  // Tell Multer to use a unique name (timestamp + original name)
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Create a file filter to only allow .svg files
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/svg+xml') {
        cb(null, true);
    } else {
        cb(new Error('Only SVG files are allowed!'), false);
    }
};

// Initialize Multer with the storage configuration and file filter
const upload = multer({ storage: storage, fileFilter: fileFilter });

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

router.get("/new", async (req, res) => { // 1. Make the function async
  try {
    const allCategories = await db.getAllCategories();

    res.render("new-tech-form", {
      title: "Add New Technology",
      categories: allCategories, // This was the missing piece of data
      currentPage: "Technologies",
    });
  } catch (err) {
    console.error("Error fetching categories for form:", err);
    res.status(500).send("Internal Server Error");
  }
});
// Use the multer middleware here. The 'logo_file' must match the 'name' in your form's file input.
router.post("/new", upload.single('logo_file'), async (req, res) => {
    try {
        // The text fields from your form are in req.body
        const newTechData = req.body;

        // Multer adds the file info to req.file. We just need the filename.
        if (req.file) {
            newTechData.logo_url = req.file.filename;
        }

        // Now, call your database function with the combined data
        await db.createTechnology(newTechData);

        res.redirect('/technologies');
    } catch (err) {
        console.error("Error creating technology:", err);
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