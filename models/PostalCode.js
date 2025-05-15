const mongoose = require("mongoose");

const postalCodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
});

module.exports = mongoose.model("PostalCode", postalCodeSchema);
