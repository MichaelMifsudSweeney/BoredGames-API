const fs = require("fs");

//fetch owner data
const fetchOwnersData = () => {
  let ownersList = JSON.parse(fs.readFileSync("./data/owners.json"));
  return ownersList;
};

module.exports = { fetchOwnersData };