const express         = require('express');
const app             = express();
const mongoose        = require('mongoose');

const db              = require('database.js')(mongoose);


app.get("/", (req, res) => {

});

app.get("/vessel/callsign/:callsign", (req, res, next) => {

});

app.get("/vessel/name/:name", (req, res) => {

});

app.get("/vessel/type/:type", (req, res) => {

});

app.get("/vessel/mmsi/:mmsi", (req, res) => {

});

app.listen(3000, () => console.log("Debugging on port 3000"));
