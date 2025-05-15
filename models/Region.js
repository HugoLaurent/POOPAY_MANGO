const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  nom: { type: String, required: true },
});

module.exports = mongoose.model("Region", regionSchema);
