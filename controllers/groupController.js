const GroupMember = require("../models/GroupMember");
const Group = require("../models/Group");

exports.getGroupsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const memberships = await GroupMember.find({ user: userId }).populate(
      "group"
    );
    const groups = memberships.map((m) => m.group);
    res.json(groups);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des groupes." });
  }
};
