import http from "http";
import express from "express";

const api = express();

api.get('/top50', () =>{
    return console.log("Hola mundo");
});


const server = http.createServer(api);

server.listen(4000);

server.on('listening', ()=>{
    console.log('Servidor escuchando');
})

server.on('error', ()=>{
    console.error('Ha ocurrido un error');
})