import express from "express";

import alumnos from "./routes/routes.alumnos.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("Bienvenido al barrio antioquia");
});

app.use("/api", alumnos);
export default app;
