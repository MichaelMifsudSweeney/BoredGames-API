const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

//Inventory list endpoint
router
    .route("/")
    .get(gamesController.gamesList)

router
    .route("/:id")
    .get(gamesController.singleGame)

//Inventory detail endpoint
// router
// 	.route("/:id")
// 	.get(inventoryController.inventoryItem)
// 	.delete(inventoryController.deleteInvetoryItem);

module.exports = router;