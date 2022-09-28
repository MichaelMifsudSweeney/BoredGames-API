const gamesModel = require("../models/gameModel");
const ownersModel = require("../models/ownersModel");
const { v4: uuidv4 } = require("uuid");
const Jabber = require('jabber');
const jabber = new Jabber();

//return the games list, filter by availability
const gamesList = (_req, res) => {
    let gamesData = gamesModel.fetchGameData();
    let filteredGamesData = gamesData.filter((game) => game.gameAvailability === "AVAILABLE")
    res.status(200).json({
        status: "OK",
        results: filteredGamesData
    });
};

//get a single game based on the gameId
const singleGame = (req, res) => {
    let gamesData = gamesModel.fetchGameData();
    let ownersData = ownersModel.fetchOwnersData();
    let selectedGame = gamesData.find((game) => game.gameId === req.params.id)
    let ownerProfile = ownersData.find((owner) => selectedGame.ownerId === owner.ownerId)
    let gameAndOwnerData = Object.assign(selectedGame, ownerProfile)
    res.status(200).json({
        status: "OK",
        results: gameAndOwnerData
    });
};

//reserve a game by updating fields in the json
const reserveGame = (req, res) => {
    let gamesData = gamesModel.fetchGameData();
    let selectedGame = gamesData.find((game) => game.gameId === req.body.gameId)
    selectedGame.gameAvailability = 'RENTED'
    selectedGame.renterId = req.body.currentUser
    let allOtherGames = gamesData.filter((game) => game.gameId !== req.body.gameId)
    allOtherGames.push(selectedGame)
    gamesModel.writeGameData(allOtherGames)
    res.status(200).json({
        status: "OK"
    });
};

//create a new game with the passed object
const newGame = (req, res) => {
    let newGameData = req.body
    let gamesData = gamesModel.fetchGameData();
    gamesData.push(newGameData)
    gamesModel.writeGameData(gamesData)
    res.status(200).json({
        status: "OK",
        results: newGameData
    });
};

//create a new comment with the passed object and the params
const newComment = (req, res) => {
    let gamesData = gamesModel.fetchGameData();
    let ownersData = ownersModel.fetchOwnersData();
    let selectedOwner = ownersData.find((owner) => req.body.currentUser === owner.ownerId)

    let newComment = {
        "commentId": uuidv4(),
        "commentName": selectedOwner.ownerName,
        "commentText": req.body.commentText,
        "commentDate:": Date.now()
    }

    objIndex = gamesData.findIndex((obj => obj.gameId === req.params.id));
    gamesData[objIndex].gameReviews.push(newComment)
    gamesData[objIndex].gameAvailability = "AVAILABLE"
    gamesData[objIndex].renterId = ""
    gamesModel.writeGameData(gamesData)
    res.status(200).json({
        status: "OK"
    });
};

//delete a game based on gameId
const deleteGame = (req, res) => {
    let gamesData = gamesModel.fetchGameData();
    let updatedData = gamesData.filter(game => game.gameId !== req.params.id)
    gamesModel.writeGameData(updatedData)
    res.status(200).json({
        status: "OK"
    });
};

module.exports = {
    gamesList,
    singleGame,
    newGame,
    newComment,
    reserveGame,
    deleteGame
};