// dbtest.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var SensorSchema = new mongoose.Schema({
  data: String,
  created: Date,
});

// data model
var Sensor = mongoose.model("Sensor", SensorSchema);

var sensor1 = new Sensor({ data: "124", created: Date() });
sensor1.save();

var sensor2 = new Sensor({ data: "573", created: Date() });
sensor2.save();

console.log("Sensor data were saved in MongoDB");
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact G