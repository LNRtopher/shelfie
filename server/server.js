const express = require('express');
const app = express();
const path = require('path');
//const {getGame, addGame} = require('./controllers/controller');
const mongoose = require('mongoose');
const router = express.Router();
const Game = require('./models');
//mongosh "mongodb+srv://new_user:J44rih6CcIVFjmYN@cluster0.eiuf1d9.mongodb.net/?retryWrites=true&w=majority" --apiVersion 6012 --username new_user
const gameController = require('./controllers/getGameController.js')

app.use('/build', express.static(path.join(__dirname, '../build')));
//deliver root html file
app.get('/', (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})

//router for getting game from db
app.get('/api/:name', gameController.getGame, (req, res) => {
  console.log (res.locals.game, 'res.locals.game')
  return res.status(200).send(res.locals.game); 
});

// app.post('/add', addGame, (req, res) => {
//     return res.status(200).json(res.locals.game);
// });
app.listen(3000);
console.log('server listening on port 3000')