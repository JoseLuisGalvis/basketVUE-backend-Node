// src/services/playerService.js
const axios = require("axios");
const { API_URL } = require("../config");

// Servicio para interactuar con la API externa
class PlayerService {
  static async getAllPlayers() {
    try {
      const response = await axios.get(API_URL);
      console.log(
        "[DEBUG] Datos recibidos de la API:",
        response.data.length,
        "jugadores"
      );
      // Filtrar jugadores excluyendo aquellos con imgSrc que contengan /15.png o /25.png
      const filteredPlayers = response.data.filter(
        (player) =>
          !player.imgSrc.includes("/15.png") &&
          !player.imgSrc.includes("/25.png")
      );
      console.log(
        "[DEBUG] Jugadores después del filtro:",
        filteredPlayers.length
      );
      return filteredPlayers;
    } catch (error) {
      throw new Error(`Error al obtener todos los jugadores: ${error.message}`);
    }
  }

  static async getPlayerById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      if (
        !response.data ||
        response.data.imgSrc.includes("/15.png") ||
        response.data.imgSrc.includes("/25.png")
      ) {
        throw new Error("Jugador no encontrado");
      }
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener jugador por ID: ${error.message}`);
    }
  }

  static async getPlayersByPosition(position) {
    try {
      const response = await axios.get(`${API_URL}/position/${position}`);
      return response.data;
    } catch (error) {
      throw new Error(
        `Error al obtener jugadores por posición: ${error.message}`
      );
    }
  }
}

module.exports = PlayerService;
