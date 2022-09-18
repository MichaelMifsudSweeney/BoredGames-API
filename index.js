// const express = require("express");
// const app = express();
// const cors = require("cors");
// const inventoryRoute = require("./routes/inventory");
// const warehouseRoute = require("./routes/warehouse");
// require("dotenv").config();
// const { PORT, BACKEND_URL } = process.env;

// //Cors Middleware
// app.use(cors());

// //Middleware to accces the body of the request
// app.use(express.json());

// //Inventory route
// app.use("/inventory", inventoryRoute);

// //Warehouse route
// app.use("/", warehouseRoute);



// app.listen(PORT, () => {
// 	console.log("Running on: boop" + PORT);
// 	console.log("URL: " + BACKEND_URL);
// });
