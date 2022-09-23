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

router
    .route("/reserve")
    .post(gamesController.reserveGame)


router
    .route("/new")
    .post(gamesController.newGame)

router
    .route("/comment/:id")
    .post(gamesController.newComment)



//Inventory detail endpoint
// router
// 	.route("/:id")
// 	.get(inventoryController.inventoryItem)
// 	.delete(inventoryController.deleteInvetoryItem);

module.exports = router;