const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    //origin: //["http://localhost:5173", 'http://192.168.68.50:5173'], // Allow only this origin to access
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Allowable methods
    allowedHeaders: ["Content-Type", "Authorization"], // Custom headers
    credentials: true, // Allow cookies
  })
);

let dbConnect = require("./dbConnect");

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
let historyRoutes = require("./routes/historyRoutes");
console.log("Stock route requested in server.js");
app.use("/api/stock", stockRoutes);
app.use("/api/specials", specialsRoutes);
app.use("/api/special-items", specialItemsRoutes);
app.use("/api/history", historyRoutes);

app.listen(8080, "0.0.0.0", () => {
  console.log(`Server running on port 8080`);
  console.log(
    "Accessible on local network at http://<Your-LAN-IP-Address>:8080"
  );
});
