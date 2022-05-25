const express = require('express');
const app = express();
const Nedb = require('nedb')
const path = require('path')

app.use(express.static('public'));

const db = new Nedb({
    filename: path.join(__dirname, "usuarios.db"),
    autoload: true
})

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/index.html'));
})

app.use(express.json());

app.post('/user', (req, res) => {
    const data = req.body

    const user = {
        nombre: data.name,
        fecha: data.date,
        color: data.color,
        calificacion: data.cal,
        telefono: data.tel,
        correo: data.emaill,
        archivo: data.file,
        lenguaje: data.language
    }

    db.insert(user, (err, doc) => {
        if (err) {
            console.log("Hubo un error")
            return res.status(500).send("Hubo un error")
        }
        res.send(doc)
    })
});

app.listen(3000, () => console.log('Listening at port 3000'));