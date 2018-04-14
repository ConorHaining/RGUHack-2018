var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  "RecvTime": {
    type: Date
  },
  "MessageID": {
    type: Number
  },
  "NavigationalStatus": {
    type: Number
  },
  "ROT": {
    type: Number
  },
  "SOG": {
    type: Number
  },
  "PositionAccuracy": {
    type: Number
  },
  "Longitude": {
    type: Number
  },
  "Latitude": {
    type: Number
  },
  "COG": {
    type: Number
  },
  "TrueHeading": {
    type: Number
  },
  "Second": {
    type: Number
  },
  "RAIM": {
    type: Number
  },
  "OffPosition": {
    type: Number
  },
  "Altitude": {
    type: Number
  },
  "MMSI": {
    type: Number
  },
  "location": [{
    type: Number
  }]
});
