const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  nom: { type: String, required: true },
});

module.exports = mongoose.model("Group", groupSchema);
