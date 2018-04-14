module.exports = (mongoose) => {
  const databaseURL     = "mongodb://127.0.0.1:27017/hackais";
  // Establish the connection
  mongoose.connect(databaseURL);

  // Handle any errors
  mongoose.connection.on("error", console.error.bind(console, "DB Connection Error!"));

  // Close Database when process ends
  process.on("SIGINT", function() {
		mongoose.connection.close(function () {
			console.log("DB connection closed.");
			process.exit(0);
		});
	});

  // Reqister the models
  var models = require("./models/models.js");

  // Provide the connection & database models
  return {
    connection: mongoose.connection,
    model: models
  };

};
