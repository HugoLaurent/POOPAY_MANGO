// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    pseudo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    sexe: { type: String, enum: ["Homme", "Femme", "Autre"], required: true },
    date_naissance: { type: Date, required: true },
    region: { type: mongoose.Schema.Types.ObjectId, ref: "Region" },
    statut_emploi: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmploymentStatus",
    },
    secteur: { type: mongoose.Schema.Types.ObjectId, ref: "Sector" },
    tranche_salaire: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SalaryRange",
    },
    abonnement: { type: mongoose.Schema.Types.ObjectId, ref: "Subscription" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
