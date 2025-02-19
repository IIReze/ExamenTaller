import { Request, Response } from "express";

export const getAll = (req: Request, res: Response): void => {
    console.log("Se llamó a getAll"); 
    res.status(200).json({ message: "UNACH tu " });
};

export const obtenerUsuarios = (req: Request, res: Response): void => {
    const usuarios = [
        { id: 1, nombre: "Juan Perez", email: "juan.perez@example.com" },
        { id: 2, nombre: "Ana Garcia", email: "ana.garcia@example.com" },
        { id: 3, nombre: "Carlos Lopez", email: "carlos.lopez@example.com" }
    ];
    console.log("Se llamó a obtenerUsuarios");
    res.status(200).json(usuarios);
};