const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// (url)/user/...

router
    .route("/:id")
    .get(userController.singleUserProfile)

module.exports = router;