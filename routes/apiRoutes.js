const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const toiletSessionController = require("../controllers/toiletSessionController");
const groupController = require("../controllers/groupController");

// Utilisateurs
router.get("/users", usersController.getAllUsers);

// Sessions toilettes par user
router.get(
  "/users/:userId/sessions",
  toiletSessionController.getSessionsByUser
);

// Groupes d’amis par user
router.get("/users/:userId/groups", groupController.getGroupsByUser);

module.exports = router;
