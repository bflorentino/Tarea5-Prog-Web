const { json } = require("body-parser");
const express = require("express");
const route = express.Router()

const vehicles = [
    {
        "marca": "toyota",
        "modelo": "camry",
        "anio": "2014"
    },
    {
        "marca": "toyota",
        "modelo": "corolla",
        "anio": "2010"
    }
];

route.post('/', (req, res) => {
    
    const vehicle = {
        marca : req.body.marca,
        modelo: req.body.modelo,
        anio: req.body.anio
    }

    vehicles.push(vehicle)
    
    const response = {
        data: vehicle,
        message: "Se ha agregado con exito el nuevo vehículo",
        exito: true
    }
    
    res.send(response)
})

route.get('/', (req, res) => {

    const response = {
        data: [...vehicles],
        exito: true
    }
    
    res.send(response)
})

module.exports = route;