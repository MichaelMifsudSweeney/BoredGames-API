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

const newGame = (req, res) => {
    // let gamesData = gamesModel.fetchGameData();
    let newGameData = {
        "gameId": uuidv4(),
        "gameName": jabber.createWord(5, true),
        "gameDescription": jabber.createParagraph(30),
        "gameDuration": "45-90",
        "renterId": "aae16546-dacb-497f-af58-1474af620c93",
        "gameMaxPlayers": "6",
        "gameMinPlayers": "4",
        "image": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg",
        "gameCategory": "mavSOM8vjH",
        "ownerId": "0410dfa5-96f7-4b44-ad0b-de164671d091",
        "gameAvailability": "AVAILABLE",
        "gameCondition": "GOOD",
        "gameReviews": [
            {
                "commentId": uuidv4(),
                "commentName": jabber.createFullName(),
                "commentText": jabber.createParagraph(10),
                "commentDate:": Date.now()
            },
            {
                "commentId": uuidv4(),
                "commentName": jabber.createFullName(),
                "commentText": jabber.createParagraph(40),
                "commentDate:": Date.now()
            }
        ]
    }

    let gamesData = gamesModel.fetchGameData();
    gamesData.push(newGameData)
    console.log(gamesData)
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
    newComment
};