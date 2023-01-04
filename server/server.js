const express = require('express');
const app = express();
const path = require('path');
const {SERVER_PORT} = process.env;


// app.use(express.json());
app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => {
    console.log(`Mana ramping on port ${SERVER_PORT}`)
})