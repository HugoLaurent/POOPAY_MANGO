const mongoose = require("mongoose");

const paymentMethodSchema = new mongoose.Schema({
  nom: { type: String, required: true },
});

module.exports = mongoose.model("PaymentMethod", paymentMethodSchema);
