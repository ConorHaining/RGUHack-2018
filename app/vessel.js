module.exports = (db) => {

  return {

    byName: (name, cb) => {

      db.model.Vessel.findOne({Name: name}, (err, vessel) => {
        if (err) throw err;

        if (vessel === null) {
          cb(null);
        } else {

          db.model.Position.find({MMSI: vessel.MMSI}, "Longitude Latitude TrueHeading RecvTime", {sort: {RecvTime: -1}}, (err, positions) => {

            var ship = {
              vessel: vessel,
              positions: positions
            }

            cb(ship)

          });

        }

      });

    }

  }

};
