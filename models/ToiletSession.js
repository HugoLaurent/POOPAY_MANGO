const mongoose = require("mongoose");

const toiletSessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
});

module.exports = mongoose.model("ToiletSession", toiletSessionSchema);
