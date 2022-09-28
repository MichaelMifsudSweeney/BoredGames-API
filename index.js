const express = require("express");
const app = express();
const cors = require("cors");
const gamesRoute = require("./routes/games");
const userRoute = require("./routes/user");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

//Ability to use cors
app.use(cors());

//Middleware to accces the body of the request
app.use(express.json());

//Games routes
app.use("/games", gamesRoute);

//user routes
app.use("/user", userRoute);

//listen at port
app.listen(PORT, () => {
	console.log("Running on:" + PORT);
});
