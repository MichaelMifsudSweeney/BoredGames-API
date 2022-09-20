const fs = require("fs");

//Read inventory data
const fetchOwnersData = () => {
  let ownersList = JSON.parse(fs.readFileSync("./data/owners.json"));
  return ownersList;
};

module.exports = { fetchOwnersData };