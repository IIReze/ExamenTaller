import express from "express";
import dotenv from "dotenv";
import productosRoutes from "../routes/productos.routes.js"; // Importación correcta

dotenv.config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware antes de las rutas
app.use("/productos", productosRoutes); // Usar el router

app.get("/", (req, res) => {
    res.send("Servidor en funcionamiento");
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});