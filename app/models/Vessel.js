var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  AISVersion : {
    type: Number
  },
  CallSign : {
    type: String
  },
  Name : {
    type: String
  },
  ShipType : {
    type: Number
  },
  Dimension_A : {
    type: Number
  },
  Dimension_B : {
    type: Number
  },
  Dimension_C : {
    type: Number
  },
  Dimension_D : {
    type: Number
  },
  PositionFixingDevice : {
    type: Number
  },
  MaxDraught : {
    type: Number
  },
  DTE : {
    type: Number
  },
  AtoNType : {
    type: Number
  },
  VirtualAtoN : {
    type: Number
  },
  AssignedMode : {
    type: Number
  },
  IMO : {
    type: Number
  },
  MMSI : {
    type: Number
  },
  count : {
    type: Number
  },
  pslow : {
    type: Number
  },
  length : {
    type: Number
  },
  width : {
    type: Number
  }
});
