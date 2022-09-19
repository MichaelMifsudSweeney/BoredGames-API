const gamesModel = require("../models/gameModel");
const { v4: uuidv4 } = require("uuid");

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
    let selectedGame = gamesData.find((game) => game.gameId === req.params.id)
//    console.log("gamesData", gamesData)
   res.status(200).json({
       status: "OK",
       results: selectedGame
   });
console.log(req.params['id']);
  res.sendStatus(200);
};

module.exports = {
	gamesList,
    singleGame
};