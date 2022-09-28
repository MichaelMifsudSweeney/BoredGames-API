const fs = require("fs");

//fetch game data
const fetchGameData = () => {
  let gameList = JSON.parse(fs.readFileSync("./data/games.json"));
  return gameList;
};

//write game data
const writeGameData = (data) => {
    fs.writeFileSync("./data/games.json", JSON.stringify(data));
  };

module.exports = { fetchGameData, writeGameData };