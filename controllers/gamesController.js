const gamesModel = require("../models/gameModel");
const ownersModel = require("../models/ownersModel");
const { v4: uuidv4 } = require("uuid");
const Jabber = require('jabber');
const jabber = new Jabber();
const gamesList = (req, res) => {
    let gamesData = gamesModel.fetchGameData();
    console.log("gamesData", gamesData)
    res.status(200).json({
        status: "OK",
        results: gamesData
    });
};

const singleGame = (req, res) => {
    let gamesData = gamesModel.fetchGameData();
    let ownersData = ownersModel.fetchOwnersData();
    let selectedGame = gamesData.find((game) => game.gameId === req.params.id)
    let ownerProfile = ownersData.find((owner) => selectedGame.ownerId === owner.ownerId)
    let gameAndOwnerData = Object.assign(selectedGame, ownerProfile)

    console.log(gameAndOwnerData)
    res.status(200).json({
        status: "OK",
        results: gameAndOwnerData
    });
};

const reserveGame = (req, res) => {
    let gamesData = gamesModel.fetchGameData();
    let selectedGame = gamesData.find((game) => game.gameId === req.body.gameId)
    selectedGame.gameAvailability = 'RENTED'
    selectedGame.renterId = req.body.gameId
    let allOtherGames = gamesData.filter((game) => game.gameId !== req.body.gameId)
    allOtherGames.push(selectedGame)
    gamesModel.writeGameData(allOtherGames)
    res.status(200).json({
        status: "OK"
    });
};

const newGame = (req, res) => {
    // let gamesData = gamesModel.fetchGameData();
    let newGameData = req.body
    console.log(newGameData)
    let gamesData = gamesModel.fetchGameData();
    gamesData.push(newGameData)
    // console.log(gamesData)
    gamesModel.writeGameData(gamesData)

    res.status(200).json({
        status: "OK",
        results: newGameData
    });
};

const newComment = (req, res) => {
    // let gamesData = gamesModel.fetchGameData();
    let gamesData = gamesModel.fetchGameData();
    let selectedGame = gamesData.find((game) => game.gameId === req.params.id)
    let newComment = {
        "commentId": uuidv4(),
        "commentName": jabber.createFullName(),
        "commentText": jabber.createParagraph(40),
        "commentDate:": Date.now()
    }

    //let updatedGame = selectedGame.gameReviews.push(newComment)
    objIndex = gamesData.findIndex((obj => obj.gameId == req.params.id));
    gamesData[objIndex].gameReviews.push(newComment)

    //find the game
    //extract the comments
    //add in the new comment
    //update the existing comments
    //write to the json file
    console.log(newComment)
    gamesModel.writeGameData(gamesData)
    res.status(200).json({
        status: "OK",
        results: gamesData
    });
};





module.exports = {
    gamesList,
    singleGame,
    newGame,
    newComment,
    reserveGame
};