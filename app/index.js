const express         = require('express');
const app             = express();
const mongoose        = require('mongoose');

const db              = require('./database.js')(mongoose);


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("api/vessel/callsign/:callsign", (req, res, next) => {

  db.model.Vessel.findOne({CallSign: req.params.callsign}, (err, vessel) => {
    if (err) throw err;

    if (vessel === null) {
      res.sendStatus(404);
    } else {
      res.send(vessel);
    }

  });

});

app.get("api/vessel/name/:name", (req, res) => {

  db.model.Vessel.findOne({Name: req.params.name}, (err, vessel) => {
    if (err) throw err;

    if (vessel === null) {
      res.sendStatus(404);
    } else {
      res.send(vessel);
    }

  });

});

app.get("api/vessel/type/:type", (req, res) => {

  db.model.Vessel.find({Type: req.params.type}, (err, vessel) => {
    if (err) throw err;

    if (vessel === null) {
      res.sendStatus(404);
    } else {
      res.send(vessel);
    }

  });

});

app.get("api/vessel/mmsi/:mmsi", (req, res) => {

  db.model.Vessel.findOne({MMSI: req.params.mmsi}, (err, vessel) => {
    if (err) throw err;

    if (vessel === null) {
      res.sendStatus(404);
    } else {
      res.send(vessel);
    }

  });

});


app.listen(3000, () => console.log("Debugging on port 3000"));
