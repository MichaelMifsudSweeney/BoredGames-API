const fs = require("fs");

//Read inventory data
const fetchGameData = () => {
  let gameList = JSON.parse(fs.readFileSync("./data/games.json"));
  return gameList;
};

const writeGameData = (data) => {
    fs.writeFileSync("./data/games.json", JSON.stringify(data));
  };

module.exports = { fetchGameData, writeGameData };