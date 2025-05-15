const mongoose = require("mongoose");

const compteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    solde: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Compte", compteSchema);
