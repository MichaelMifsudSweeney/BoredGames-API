const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//Inventory list endpoint
// router
//     .route("/")
//     .get(gamesController.gamesList)

router
    .route("/:id")
    .get(userController.singleUserProfile)
    

//Inventory detail endpoint
// router
// 	.route("/:id")
// 	.get(inventoryController.inventoryItem)
// 	.delete(inventoryController.deleteInvetoryItem);

module.exports = router;