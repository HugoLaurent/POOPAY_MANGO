const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate(
      "region statut_emploi secteur tranche_salaire abonnement"
    );
    res.json(users);
  } catch (error) {
    console.error("❌ Erreur dans getAllUsers:", error);
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
    const minAge = parseInt(min); // exemple : 34
    const maxAge = parseInt(max); // exemple : 56

    // Exemple : minAge = 34 → né après 2025 - 34 = 1991
    const dateMax = new Date(
      today.getFullYear() - minAge,
      today.getMonth(),
      today.getDate()
    );
    const dateMin = new Date(
      today.getFullYear() - maxAge,
      today.getMonth(),
      today.getDate()
    );

    const users = await User.find({
      date_naissance: {
        $gte: dateMin, // né après cette date
        $lte: dateMax, // né avant cette date
      },
    });

    res.json(users);
  } catch (error) {
    console.error("❌ Erreur getUsersByAgeRange:", error);
    res.status(500).json({ error: "Erreur lors de la recherche par âge." });
  }
};
