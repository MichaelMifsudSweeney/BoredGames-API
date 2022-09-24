const gamesModel = require("../models/gameModel");
const ownersModel = require("../models/ownersModel");
const { v4: uuidv4 } = require("uuid");

const singleUserProfile = (req, res) => {
    let gamesData = gamesModel.fetchGameData();
    // console.log("gamesData", gamesData)
    let gamesOwned = gamesData.filter(game => game.ownerId === req.params.id)
    let gamesRented = gamesData.filter(game => game.renterId === req.params.id)
    // console.log(req.params.id)
    res.status(200).json({
        status: "OK",
        gamesOwned: gamesOwned,
        gamesRented: gamesRented
    });
};







module.exports = {
    singleUserProfile
};