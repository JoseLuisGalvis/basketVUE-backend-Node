# 🏀 Basket API Middleware

API Middleware desarrollada en **Node.js** y **Express** que actúa como intermediario
entre el frontend y la API pública de jugadores de baloncesto.

[devsapihub.com](https://devsapihub.com/api-players).

> 🔗 Despliegue activo: [https://basket-api-1cge.onrender.com](https://basket-api-1cge.onrender.com)

---

## 🚀 ¿Qué hace esta API?

- Conecta con una API externa de jugadores.
- Filtra resultados para eliminar jugadores no deseados.
- Proporciona endpoints REST listos para usar en tu frontend.

---

## 📦 Instalación local

```bash
git clone https://github.com/tu_usuario/tu_repo.git
cd tu_repo
npm install
npm run dev
```

---

## 🌐 Endpoints disponibles

**Base URL:**

```
https://basket-api-1cge.onrender.com/api
```

| Método | Endpoint                      | Descripción                             |
| ------ | ----------------------------- | --------------------------------------- |
| GET    | `/players`                    | Retorna todos los jugadores (filtrados) |
| GET    | `/players/:id`                | Retorna un jugador por su ID            |
| GET    | `/players/position/:position` | Retorna jugadores por posición          |

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- Axios
- dotenv
- CORS

---

## 📄 Licencia

Este proyecto está licenciado bajo la ISC License.

---

## ✨ Autor

Creado por José Luis Galvis.
Full Stack Dev
