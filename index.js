// index.js
// npm run dev
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const playerRoutes = require("./src/routes/playerRoutes");
const errorHandler = require("./src/middleware/errorHandler");

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS para el frontend
app.use(express.json()); // Parsear solicitudes JSON

// Ruta raíz
app.get("/", (req, res) => {
  res.json({
    message: "👉 Bienvenido a la API Middleware basket con Node/Express 🏀",
  });
});

// Rutas
app.use("/api", playerRoutes);

// Manejo de errores global
app.use(errorHandler);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
