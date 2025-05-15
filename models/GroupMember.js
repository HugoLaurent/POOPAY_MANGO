const mongoose = require("mongoose");

const groupMemberSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
});

module.exports = mongoose.model("GroupMember", groupMemberSchema);
