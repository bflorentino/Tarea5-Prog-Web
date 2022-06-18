const express = require('express');
const app = express();
const vehicles = require('./routes/vehicles-route')
const phone = require('./routes/phones-route')
const computers = require('./routes/computers-route')

app.use(express.json())
app.use('/vehicle', vehicles)
app.use('/phone', phone)
app.use('/computers', computers)

app.listen(80, () => {
     console.log("El servidor está escuchando en el puerto 80")

     console.log("\nEste servicio web contiene una lista de celulares, vehiculos y computadoras a los cuales usted puede acceder realizando una petición HTTP. También puede registrar nuevos elementos para cada lista haciendo una petición de tipo POST")

})