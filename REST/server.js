require('dotenv').config(); // Environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cfenv = require('cfenv');

const app = express();

const port = process.env.PORT || 4000;

var db = ""

// DB Connection
try{
    mongoose.connect(process.env.DATABASE_URL_CLOUD, {useNewUrlParser: true, useUnifiedTopology: true}, () => 
        console.log("Connected"));
    
    db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log("Connecting to database..."));

} catch(error){
    console.log("Could not connect to database");
}

// Prueba GET del server
// app.get('/', (req, res) => {
//     res.send('Hello world, testing...')
// });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/tareas', require('./routes/tareas-routes'));

app.listen(port, () => {
    console.log('\nSERVER LISTENING ON PORT: ' + port +'\n');
});