const express = require('express');
const app = express();
const path = require('path');
//const {getGame, addGame} = require('./controllers/controller');
const mongoose = require('mongoose');
const router = express.Router();
const Game = require('./models');
//mongosh "mongodb+srv://new_user:J44rih6CcIVFjmYN@cluster0.eiuf1d9.mongodb.net/?retryWrites=true&w=majority" --apiVersion 6012 --username new_user

app.use('/build', express.static(path.join(__dirname, '../build')));
//deliver root html file
app.get('/', (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})

app.get('/api/:title', (req, res) => {
    const title = req.params.title;
    Game.findOne({title})
    .then(game => {
        if(game.name === title){
            res.locals.game = game;
        }
    })
    .catch(error => console.log(error))
return res.status(200).json(res.locals.game);
});

// app.post('/add', addGame, (req, res) => {
//     return res.status(200).json(res.locals.game);
// });
app.listen(3000);
console.log('server listening on port 3000')