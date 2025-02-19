import { Router } from "express";
import { getAll, obtenerUsuarios } from "../Controllers/productos.controller.js";

const router = Router();


router.get("/all", getAll); 


router.get("/usuarios", obtenerUsuarios); 

export default router;