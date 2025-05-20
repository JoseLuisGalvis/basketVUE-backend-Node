// src/controllers/playerController.js
const PlayerService = require("../services/playerService");

class PlayerController {
  // Obtener todos los jugadores
  static async getAllPlayers(req, res, next) {
    console.log(`[INFO] Solicitud recibida: GET /api/players`);
    try {
      const players = await PlayerService.getAllPlayers();
      console.log(
        `[SUCCESS] GET /api/players - Respuesta: 200 OK, ${players.length} jugadores devueltos`
      );
      res.json(players);
    } catch (error) {
      console.log(`[ERROR] GET /api/players - Fallo: ${error.message}`);
      next(error);
    }
  }

  // Obtener jugador por ID
  static async getPlayerById(req, res, next) {
    const { id } = req.params;
    console.log(`[INFO] Solicitud recibida: GET /api/players/${id}`);
    try {
      const player = await PlayerService.getPlayerById(id);
      console.log(`[SUCCESS] GET /api/players/${id} - Respuesta: 200 OK`);
      res.json(player);
    } catch (error) {
      console.log(`[ERROR] GET /api/players/${id} - Fallo: ${error.message}`);
      next(error);
    }
  }

  // Obtener jugadores por posición
  static async getPlayersByPosition(req, res, next) {
    const { position } = req.params;
    console.log(
      `[INFO] Solicitud recibida: GET /api/players/position/${position}`
    );
    try {
      const players = await PlayerService.getPlayersByPosition(position);
      console.log(
        `[SUCCESS] GET /api/players/position/${position} - Respuesta: 200 OK, ${players.length} jugadores devueltos`
      );
      res.json(players);
    } catch (error) {
      console.log(
        `[ERROR] GET /api/players/position/${position} - Fallo: ${error.message}`
      );
      next(error);
    }
  }
}

module.exports = PlayerController;
