// scripts/seed.js
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
require("dotenv").config({ path: __dirname + "/../.env" });

// Models
const User = require("../models/User");
const ToiletSession = require("../models/ToiletSession");
const Group = require("../models/Group");
const GroupMember = require("../models/GroupMember");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => {
    console.error("❌ Erreur de connexion :", err);
    process.exit(1);
  });

async function seed() {
  await Promise.all([
    User.deleteMany(),
    ToiletSession.deleteMany(),
    Group.deleteMany(),
    GroupMember.deleteMany(),
  ]);

  // Création d'un groupe unique
  const group = await Group.create({ nom: "Team Poopay" });

  for (let i = 0; i < 10; i++) {
    // Naissance entre 20 et 70 ans
    const birthDate = faker.date.birthdate({ min: 20, max: 70, mode: "age" });

    const user = await User.create({
      pseudo: faker.internet.userName(),
      email: faker.internet.email(),
      sexe: faker.helpers.arrayElement(["Homme", "Femme", "Autre"]),
      date_naissance: birthDate,
      region: null,
      statut_emploi: null,
      secteur: null,
      tranche_salaire: null,
      abonnement: null,
    });

    // Sessions toilettes (entre 1 et 3 par user)
    const sessionCount = faker.number.int({ min: 1, max: 3 });

    for (let j = 0; j < sessionCount; j++) {
      const start = faker.date.recent();
      const end = new Date(
        start.getTime() + faker.number.int({ min: 1, max: 15 }) * 60000
      );

      await ToiletSession.create({
        user: user._id,
        start_time: start,
        end_time: end,
      });
    }

    // Ajout du user dans le groupe
    await GroupMember.create({
      user: user._id,
      group: group._id,
    });
  }

  console.log("✅ Données générées avec succès !");
  mongoose.disconnect();
}

seed();
