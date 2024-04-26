import { pool } from "../../config/db_mysql.js";

export const crearalumno = async(req, res) =>{
    try {
        const resultado = await pool.query("select * from antiguedad");
        console.log(resultado);
        res.json(resultado);
        
    }catch (error) {
        res.json({
            "error":error,
            "method":"post"
        });
    };  

};

export const mostraralumno = async(req, res) =>{

    try {
        const resultado = await pool.query("select * from antiguedad");
        console.log(resultado[0]);
        res.json(resultado[0]);
        
    } catch (error) {
        res.json({
            "error":error,
            "method": "get"
        });

    };
};

export const actualizaralumno = async(req, res) =>{

    try {
        const resultado = await pool.query("select * from antiguedad");
        console.log(resultado);
        res.json(resultado);
        
    }catch (error) {
        res.json({
            "error":error,
            "method":"put"
        });
    };  
    
};

export const eliminaralumno = async(req, res) =>{
    try {
        const resultado = await pool.query("delete * from antiguedad");
        console.log(resultado);
        res.json(resultado);
        
    }catch (error) {
        res.json({
            "error":error,
            "method":"delete"
        });
    };  
    
};

