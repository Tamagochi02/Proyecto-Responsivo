const express = require('express');
const app = express();
const Nedb = require('nedb')
const path = require('path')
app.listen(3001, () => console.log('Listening at port 3001'));
app.use(express.static('public'));
//import { getValueInput } from './ejemploJS.html'

const db = new Nedb({ // Crear archivo database
    filename: path.join(__dirname/*--> Carpeta en la que estoy parado*/, "usuarios.db"),
    autoload: true
})

app.post('/nedb', (req, res) => {
    const data = req.body

    const user = {
        nombre: data.nombre,
        fecha: data.fecha,
        color: data.color,
        calificacion: data.calificacion,
        telefono: data.telefono,
        correo: data.email,
        archivo: data.archivo,
        lenguaje: data.lenguaje
    }

    db.insert(user, (err, doc) => { // insertar
        if (err) return console.log("Hubo un error")
        console.log('Usuario: ', doc.nombre, 'insertado.')
    })
});
