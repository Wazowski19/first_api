import express from "express";
import { application } from "express";

const api = express();
api.use(express.json());

/* api.get('/top50', (req, res) =>{
    return res.send('1.-Gamma State, 2.-La Chona');
});

//Query con params

api.get('/mayus', (req, res)=>{
    const cadena = req.query.s;
    console.log(cadena); 
    if(cadena.length > 10){
        return res.send('Error la cadena es mayor a 10 caracteres')
    }
    
    return res.json({
        mayus: cadena.toUpperCase(),

    })
}); */

/* api.post('/suma', (req,res) =>{
    //TO DO: falta configurar el req.body
    const {a, b} = req.body;
    
    if(typeof a != "number" || typeof b != "number"){
        return res.json({
            msg: 'Tipo de datos inválido'
        })
    }
    
    return res.json({
        resultado: a + b,
    });
})

api.post('/max', (req,res) =>{
    //TO DO: falta configurar el req.body
    const {numbers} = req.body;
    
    if(numbers == null){
        return res.json({
            msg: 'Tipo de datos inválido'
        })
    }

    return res.json({
        resultado: Math.max(numbers),
    });
}) */


/* 
    get (consulta)      /empleados / empleados/:id
    post (crear)        /empleados
    put (actualizar)    /empleados /:id
    delete (borrar)     /empleados /:id

*/

api.get('/empleados', (req, res) =>{
    return res.json({
        msg: 'Ruta en desarrollo'
    })
    //TODO: Regresar varios empleados (Todos o filtrados o en orden etc)

});

api.get('/empleados/:id', (req, res) =>{
    const params = req.params
    res.json({
        params,
    })
    //TODO Regresar un empleado en especifico
});

api.post('/empleados', (req, res) =>{
    //TODO: Crear un nuevo empleado
})

api.put('/empleados/:id', (req, res)=>{
    //TODO: Actualizar un empleado
})

api.delete('/empleados/:id', (req, res) =>{
    //TODO: Eliminar un empleado
})


export default api;