const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/oyunlar", (req, res) => {
  const file = fs.readFileSync(path.join(__dirname, "db.json"));
  res.status(200).json(JSON.parse(file));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
