const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");

// (url)/games/...

router
    .route("/")
    .get(gamesController.gamesList)

router
    .route("/:id")
    .get(gamesController.singleGame)
    .delete(gamesController.deleteGame)

router
    .route("/reserve")
    .post(gamesController.reserveGame)

router
    .route("/new")
    .post(gamesController.newGame)

router
    .route("/comment/:id")
    .post(gamesController.newComment)

module.exports = router;