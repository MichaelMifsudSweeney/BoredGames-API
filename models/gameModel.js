const fs = require("fs");

//Read inventory data
const fetchGameData = () => {
  let gameList = JSON.parse(fs.readFileSync("./data/games.json"));
  return gameList;
};

module.exports = { fetchGameData };