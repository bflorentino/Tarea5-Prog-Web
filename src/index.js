const express = require('express');
const app = express();
app.use(express.json())

const contacts = [
     {
         "nombre" : "Jose",
         "apellido": "Mella",
         "telefono": "849-251-6812",
     },
     {
        "nombre" : "Dilcio",
         "apellido": "Hernandez",
         "telefono": "809-236-1999",
     },
     {
         "nombre" : "Dionicia",
         "apellido": "Sosa",
         "telefono": "849-836-7365",
    }
]

app.get('/', (req, res) =>{
     
     res.send("Este servicio web contiene una lista de celulares, vehiculos y computadoras a los cuales usted puede acceder realizando una petición HTTP. También puede registrar nuevos elementos para cada lista haciendo una petición de tipo POST. Para ver los contactos agregue '/contact' a la URL")
})

app.post('/contact', (req, res) => {
// Almacenar un nuevo contacto
    
    const contact = {
        nombre : req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
    }

    contacts.push(contact)
    
    const response = {
        data: contact,
        message: "Se ha agregado con exito el nuevo contacto",
        exito: true
    }

    res.send(response)
})

app.get('/contact', (req, res) => {
// Obtener todos los contactos de la lista de contactos
        
    const response = {
        data: contacts,
        exito: true
    }
    res.send(response)
})

app.get('/contact/:searchPattern', (req, res) => {
// Obtener todos los contactos que coincidan con un patrón de búsqueda dado
// (puede ser el inicio de una letra inicial o un contacto el cual su nombre empiece por dicho patrón).

     matchedContacts = contacts.filter(contact => contact.nombre.toLowerCase().startsWith(req.params.searchPattern.toLowerCase()));

     const response = {
          data: matchedContacts,
          exito: true
      }
      res.send(response)
})

app.listen(80, () => {
     console.log("El servidor está escuchando en el puerto 80")
})