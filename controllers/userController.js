const gamesModel = require("../models/gameModel");
const ownersModel = require("../models/ownersModel");
const { v4: uuidv4 } = require("uuid");

//return a user's info, as well as any games they own or have rented
const singleUserProfile = (req, res) => {
    let gamesData = gamesModel.fetchGameData();
    let gamesOwned = gamesData.filter(game => game.ownerId === req.params.id)
    let gamesRented = gamesData.filter(game => game.renterId === req.params.id)
    res.status(200).json({
        status: "OK",
        gamesOwned: gamesOwned,
        gamesRented: gamesRented
    });
};







module.exports = {
    singleUserProfile
};