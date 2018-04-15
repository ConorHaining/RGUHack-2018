module.exports = (db) => {

  return {

    random: (cb) => {

      db.model.Vessel.count().exec((err, count) => {

      // Get a random entry
      var random = Math.floor(Math.random() * count);

      // Again query all users but only fetch one offset by our random #
      db.model.Vessel.findOne({"Name": {$ne: null}}).skip(random).exec(
        function (err, result) {
          // Tada! random user
          console.log(result)
          data = result.Name;
          cb(data);
        });
      });

    },

    byName: (name, cb) => {

      db.model.Vessel.findOne({Name: name}, (err, vessel) => {
        if (err) throw err;

        if (vessel === null) {
          cb(null);
        } else {

          db.model.Position.find({MMSI: vessel.MMSI}, "Longitude Latitude TrueHeading RecvTime", {sort: {RecvTime: 1}}, (err, positions) => {

            var coordinates = [];

            for (var i = 0; i < positions.length; i++) {
              coordinates[i] = [
                positions[i]['Longitude'],
                positions[i]['Latitude']
              ]
            }

            var ship = {
              vessel: vessel,
              positions: positions,
              coordinates: coordinates
            };

            cb(ship)

          });

        }

      });

    },

    fetchNames: (page, cb) => {

      db.model.Vessel.aggregate(
        [
          { "$group": {"_id": "$Name"} },
          { "$skip": (page - 1) * 20 },
          { "$limit": 20 }
        ],
        (err, names) => {
          if (err) throw err;
          console.log(names);
          cb(names)

        }
      )

    }

  }

};
