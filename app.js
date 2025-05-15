const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // pour charger le .env

const apiRoutes = require("./routes/apiRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// mongodb+srv://lauhugopro:<db_password>@cluster0.fvopwu1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// Connexion MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté à Atlas"))
  .catch((err) => console.error("❌ Erreur MongoDB :", err));

// Routes API
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
