const express = require("express");
const app = express();
const cors = require("cors");
const gamesRoute = require("./routes/games");
// const warehouseRoute = require("./routes/warehouse");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

// //Cors Middlewarenpx
app.use(cors());

// //Middleware to accces the body of the request
app.use(express.json());

// //Inventory route
app.use("/games", gamesRoute);

// //Warehouse route
// app.use("/", warehouseRoute);



app.listen(PORT, () => {
	console.log("Running on:" + PORT);
	console.log("URL: " + BACKEND_URL);
});
