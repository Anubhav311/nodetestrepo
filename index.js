const bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
  // res.render("login.html");
  console.log('logging')
  res.send("Home");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${5001}`);
});
