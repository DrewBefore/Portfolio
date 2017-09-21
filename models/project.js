var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
  title: String,
  sub_title: String,
  description: String,
  details: [],
  website: String,
  thumbnail: String,
  jumbo: String,
  imgs: []
});

module.exports = mongoose.model("Project", ProjectSchema);
