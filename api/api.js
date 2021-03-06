import express from "express";

//Rutas
import empleadoRoutes from './routes/empleados.js';
import mascotasRoutes from './routes/mascotas.js'; 

//Middlewares
import { logger } from "./middlewares/mayus.js";


const api = express();
api.use(express.json());

api.use(logger);
api.use(empleadoRoutes);

api.use(mascotasRoutes);

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


/* api.get('/peliculas', (req, res) =>{
    return res.json({
        msg: 'Ruta en desarrollo'
    })
    //TODO: Regresar varias peliculas (Todos o filtrados o en orden etc)

});

api.get('/peliculas/:id', (req, res) =>{
    const params = req.params
    res.json({
        params,
    })
    //TODO Regresar una pelicula en especifico
});

api.post('/peliculas', (req, res) =>{
    //TODO: Crear una nueva pelicula
})

api.put('/peliculas/:id', (req, res)=>{
    //TODO: Actualizar una pelicula
})

api.delete('/peliculas/:id', (req, res) =>{
    //TODO: Eliminar una peliculas
}) */

api.post('/prueba', (req, res) =>{
    const {bandera} = req.body;
    if(bandera)
        return res.json({
            body: req.body,
        });

    throw new Error('bandera es falsa')
})


api.use((err, req, res, next)=>{
    if(err instanceof SyntaxError && err.status === 400 & 'body' in err){
        console.error(err);
        return res
            .status(400)
            .json({
                msg: 'Bad Json body'
            }); //Bad request
    }
    return res.json({
        msg: 'Error',
    });
})

export default api;