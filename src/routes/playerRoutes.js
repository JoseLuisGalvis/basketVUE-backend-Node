// src/routes/playerRoutes.js
const express = require("express");
const PlayerController = require("../controllers/playerController");

const router = express.Router();

// Rutas de la API
router.get("/players", PlayerController.getAllPlayers);
router.get("/players/:id", PlayerController.getPlayerById);
router.get(
  "/players/position/:position",
  PlayerController.getPlayersByPosition
);

module.exports = router;
