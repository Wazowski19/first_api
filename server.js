import http from "http";
import express from "express";

const api = express();

api.get('/top50', (req, res) =>{
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
});

api.get('/suma', (req,res) =>{
    //TO DO: falta configurar el req.body
    const body = req.body;
    console.log(body);

    const a = 1;
    const b = 2;
    return res.send(`${a + b}`);
})

const server = http.createServer(api);

server.listen(4000);

server.on('listening', ()=>{
    console.log('Servidor escuchando');
})

server.on('error', ()=>{
    console.error('Ha ocurrido un error');
})