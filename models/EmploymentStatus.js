const mongoose = require("mongoose");

const employmentStatusSchema = new mongoose.Schema({
  nom: { type: String, required: true },
});

module.exports = mongoose.model("EmploymentStatus", employmentStatusSchema);
