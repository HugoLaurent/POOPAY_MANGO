const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  nom: { type: String, required: true },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
