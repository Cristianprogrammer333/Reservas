import { pool } from "../../config/db_mysql.js";

export const crearalumno = async(req, res) =>{
    
        // const resultado = await pool.query("select * from antiguedad");
        // console.log(resultado[0]);
        // res.json(resultado[0]);
        let info = req.body;
        try {
            let resultado = await pool.query(`
            insert into propiedades (id_propiedad,
                direccion,
                tipo_propiedad)
                values(${info.id_propiedad},'${info.direccion}','${info.tipo_propiedad}'
                )
            `);

            if(resultado[0].affectedRows > 0 ){
                res.json({
                    respuesta:"registro insertado"
                })
            }else{
                res.json({
                    "respuesta": "No inserto NADA"
                })
            }
 
            
        } catch (error) {
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
    let info = req.body;
    try {
        let resultado = await pool.query(`
        update propiedades
        set
        id_propiedad = ${info.id_propiedad},
        direccion = '${info.direccion}',
        tipo_propiedad = '${info.tipo_propiedad}'
        where id_propiedad = ${info.id_propiedad}
        `);

        if (resultado[0].affectedRows > 0 ){
            res.json({
                respuesta:"registro modificado"
            })
        }else{
            res.json({
                "respuesta": "No modifico NADA"
            });
        };
        
    } catch (error) {
        res.json({
            "error":error,
            "method":"put"
        });  
    };
};

export const eliminaralumno = async(req, res) =>{
    let info = req.body;
    try {
        let resultado = await pool.query(`
        delete  from propiedades
        where id_propiedad = ${info.id_propiedad}
        `);

        if (resultado[0].affectedRows > 0 ){
            res.json({
                respuesta:"registro Eliminado"
            })
        }else{
            res.json({
                "respuesta": "No se Elimino"
            });
        };
        
    } catch (error) {
        res.json({
            "error":error,
            "method":"Delete"
        });  
    };
    
};

