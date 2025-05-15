const mongoose = require("mongoose");

const salaryRangeSchema = new mongoose.Schema({
  min: { type: Number, required: true },
  max: { type: Number, required: true },
});

module.exports = mongoose.model("SalaryRange", salaryRangeSchema);
