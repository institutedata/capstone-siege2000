const express = require("express");
const app = express();
require("dotenv").config();
// parse requests of content-type -
//application/json
let dbCOnnect = require("./dbConnect");
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;

//routes
//stock routes
let stockRoutes = require("./routes/stockRoutes");
let specialsRoutes = require("./routes/specialsRoutes");
let specialItemsRoutes = (s = require("./routes/specialItemsRoutes"));
console.log("Stock route requested in server.js");
app.use("/api/stock", stockRoutes);
app.use("/api/specials", specialsRoutes);
app.use("/api/special-items", specialItemsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running
on port ${PORT}.`);
});
