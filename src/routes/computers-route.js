const express = require("express");
const route = express.Router()

const computers = [
     {
         "marca" : "HP",
         "modelo": "Pavilion",
         "memoria": "12 GB RAM",
         "almacenamiento": "1TB SSD",
         "procesador": "Intel core i7 7ma"
     },
     {
        "marca" : "Dell",
         "modelo": "Optiplex",
         "memoria": "16 GB RAM",
         "almacenamiento": "500GB SSD",
         "procesador": "Intel core i7 10ma"
     },
     {
         "marca" : "Macbook",
         "modelo": "Pro 2021",
         "memoria": "32 GB RAM",
         "almacenamiento": "1TB SSD",
         "procesador": "Intel core i7 10ma"
    }
]

route.post('/', (req, res) => {
    
    const computer = {
        marca : req.body.marca,
        modelo: req.body.modelo,
        memoria: req.body.memoria,
        almacenamiento: req.body.almacenamiento,
        procesador: req.body.procesador
    }

    computers.push(computer)
    
    const response = {
        data: computer,
        message: "Se ha agregado con exito la nueva computadora",
        exito: true
    }

    res.send(response)
})

route.get('/', (req, res) => {
        
    const response = {
        data: computers,
        exito: true
    }
    res.send(response)
    res.end("Lista de computadora solicitadas");
})

module.exports = route;