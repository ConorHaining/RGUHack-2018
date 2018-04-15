const GeoJSON = require("geojson");
module.exports = (db) => {

  return {

    all: (cb) => {

      var query = db.model.Position.find();
      query.limit(200000);
      query.select("location");
      query.exec((err, positions) => {

        var data = [];

        for (var i = 0; i < positions.length; i++) {
          data[i] = {
            type: "location",
            long: positions[i]['location'][0],
            lat: positions[i]['location'][1]
          };
        }

        data = GeoJSON.parse(data, {Point: ['lat', 'long']});
        cb(data);
      });

    }

  }

};
