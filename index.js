const express = require("express");
var cors = require("cors");
const app = express();
const port = 2700;

app.use(cors());

app.get("/", function(req, res) {
    // res.render("login.html");
    console.log("logging");
    res.send("Home");
});

const add = (a, b) => {
    return a + b;
};
module.exports = {
    add,
};

// app.listen(port, () => {
//     console.log(`Listening on http://localhost:${2700}`);
// });