const express         = require('express');
const app             = express();
const mongoose        = require('mongoose');
const db              = require('./database.js')(mongoose);
const bodyParser      = require("body-parser");
const vessel          = require('./vessel.js')(db);
const postions        = require('./positions.js')(db);

console.log(vessel);

// Setup view engine
app.set('view engine', 'ejs');
// Setup a static folder
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render('index');
});

app.get('/vessel/MMSI/:mmsi', (req, res) => {

  db.model.Vessel.findOne({MMSI: req.params.mmsi}, (err, vessel) => {
    if (err) throw err;

    if (vessel === null) {
      res.sendStatus(404);
    } else {

      res.render("vessel", {ship: vessel});

    }

  });

});

app.get('/vessel/random', (req, res) => {

  vessel.random((ship) => {
    res.redirect('/vessel/name/' + ship);
  });

});

app.get('/vessel/name/:name', (req, res) => {

  vessel.byName(req.params.name, (ship) => {

    res.render("vessel", {ship: ship});

  });

});

app.get("/heatmap", (req, res) => {
  res.render("heatmap")
});

app.get("/api/vessel/name/:name", (req, res) => {

  vessel.byName(req.params.name, (ship) => {

    res.json(ship);

  });

});

app.get("/api/positions", (req, res) => {

  postions.all((pos) => {
    res.json(pos);
  });

});

app.listen(3000, () => console.log("Debugging on port 3000"));
