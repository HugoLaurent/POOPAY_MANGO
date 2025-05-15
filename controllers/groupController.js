const User = require("../models/User");
const GroupMember = require("../models/GroupMember");

exports.getGroupsByUserPseudo = async (req, res) => {
  try {
    const { pseudo } = req.query;

    if (!pseudo) {
      return res.status(400).json({ error: "Pseudo requis" });
    }

    const user = await User.findOne({ pseudo });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    const memberships = await GroupMember.find({ user: user._id }).populate(
      "group"
    );
    const groups = memberships.map((m) => m.group);

    res.json(groups);
  } catch (error) {
    console.error("❌ Erreur getGroupsByUserPseudo:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
