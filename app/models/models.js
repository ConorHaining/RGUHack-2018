// Models
const mongoose = require("mongoose");

module.exports = {
	Vessel: mongoose.model("Vessel", require("./Vessel.js")),
	Position: mongoose.model("Position", require("./Position.js"))
};
