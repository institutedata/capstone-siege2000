const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
// parse requests of content-type -
//application/json
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to staff utilities application." });
});

let postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
