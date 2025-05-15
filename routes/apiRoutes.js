const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const toiletSessionController = require("../controllers/toiletSessionController");
const groupController = require("../controllers/groupController");

// Utilisateurs
router.get("/users", usersController.getAllUsers);
router.get("/users/by-age", usersController.getUsersByAgeRange);

// Sessions toilettes par user
router.get("/users/by-pseudo/:pseudo", usersController.getUserByPseudo);

// Groupes d’amis par user
router.get("/users/groups", groupController.getGroupsByUserPseudo);

module.exports = router;
