const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate(
      "region statut_emploi secteur tranche_salaire abonnement"
    );
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des utilisateurs." });
  }
};

exports.getUsersByAgeRange = async (req, res) => {
  try {
    const { min, max } = req.query;

    if (!min || !max) {
      return res.status(400).json({ error: "min et max requis en query." });
    }

    const today = new Date();
    const minBirth = new Date(
      today.getFullYear() - max,
      today.getMonth(),
      today.getDate()
    );
    const maxBirth = new Date(
      today.getFullYear() - min,
      today.getMonth(),
      today.getDate()
    );

    const users = await User.find({
      date_naissance: {
        $gte: minBirth,
        $lte: maxBirth,
      },
    }).populate("region statut_emploi secteur tranche_salaire abonnement");

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la recherche par âge." });
  }
};
