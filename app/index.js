const express         = require('express');
const app             = express();

const MongoClient     = require('mongodb').MongoClient;
const databaseURL     = "mongodb://hackuser:hackuser@csdm-mongodb.rgu.ac.uk/hackais";
const database        = await MongoClient.connect(databaseURL);
const db              = database.db("hackais");
const cVessels        = db.collection('vessels');
const cPositions      = db.collection('positions');
const cTowns          = db.collection('towns');

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/vessel/callsign/:callsign", (req, res) => {

});

app.get("/vessel/name/:name", (req, res) => {

});

app.get("/vessel/type/:type", (req, res) => {

});

app.get("/vessel/mmsi/:mmsi", (req, res) => {

});

app.listen(3000, () => console.log("Debugging on port 3000"));
