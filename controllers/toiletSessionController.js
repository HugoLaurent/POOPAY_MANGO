const ToiletSession = require("../models/ToiletSession");

exports.getSessionsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const sessions = await ToiletSession.find({ user: userId });
    res.json(sessions);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des sessions." });
  }
};
