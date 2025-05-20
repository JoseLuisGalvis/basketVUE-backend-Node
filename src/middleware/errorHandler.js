// src/middleware/errorHandler.js
const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    message: error.message || "Error interno del servidor",
  });
};

module.exports = errorHandler;
