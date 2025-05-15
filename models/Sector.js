const mongoose = require("mongoose");

const sectorSchema = new mongoose.Schema({
  nom: { type: String, required: true },
});

module.exports = mongoose.model("Sector", sectorSchema);
