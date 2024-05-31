import { Router } from "express";

const RutaUsuario = Router();

RutaUsuario.get("/usuario" , (req, res) =>{
    res.json({
        "nombre": "Thomas ",
        "apellido": "parra",
        "profesion": "DJ"
    });
});


RutaUsuario.post("/usuario" , (req, res) =>{
    console.log(req.body);
    let nombre = req.body.name;
    res.json({
        "respuesta":"Esto es una prueba del proyecto de " + nombre
    });
});


export default RutaUsuario;