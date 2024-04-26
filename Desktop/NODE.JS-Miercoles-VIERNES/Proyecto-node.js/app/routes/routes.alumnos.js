import { Router } from "express";
import { actualizaralumno, crearalumno, eliminaralumno, mostraralumno } from "../controller/controller.alumnos.js";


const alumnos = Router();


alumnos.get("/estudiante", mostraralumno);

alumnos.post("/estudiante" , crearalumno);

alumnos.put("/estudiante", actualizaralumno);

alumnos.delete("/estudiante" , eliminaralumno);

export default alumnos;
