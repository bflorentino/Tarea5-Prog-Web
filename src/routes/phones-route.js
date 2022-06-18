const express = require("express");
const route = express.Router()

const phones = [
    {
     "marca" : "Samsung",
     "modelo" : "Galaxy S20 plus",
     "memoria": "8 GB RAM",
     "almacenamiento" : "256 GB",
     "procesador" : "Qualcom Snapdragon 895"
    },
    {
     "marca" : "Iphone",
     "modelo" : "13 Pro Max",
     "memoria": "4 GB RAM",
     "almacenamiento" : "256 GB",
     "procesador" : "A15 Bionic"
    }
]

route.post('/', (req, res) => {
    
    const phone = {
        marca : req.body.marca,
        modelo: req.body.modelo,
        almacenamiento: req.body.almacenamiento,
        memoria: req.body.memoria,
        procesador: req.body.procesador
    }

    phones.push(phone)
    
    const response = {
        data: phone,
        message: "Se ha agregado con exito el nuevo teléfono",
        exito: true
    }

    res.send(response)
})

route.get('/', (req, res) => {
    
    const response = {
        data: phones,
        exito: true
    }
    res.send(response)
})

module.exports = route;