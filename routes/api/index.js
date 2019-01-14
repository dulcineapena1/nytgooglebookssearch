const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes =require("./google");

// Book routes
router.use("/books", bookRoutes);

// Google routes
router.use("/google", googleRoutes);

module.exports = router;
