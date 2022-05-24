const express = require('express');
const app = express();
const nedb =  require('nedb');
app.listen(3001, () => console.log('Listening at port 3001'));
app.use(express.static('public'));

const database = new nedb('usuarios.db');
database.loadDatabase();

app.post('/nedbexpress', (req, res) => {
    const data = req.body
    database.insert(data)
    console.log(database)
});
 