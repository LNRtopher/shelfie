const express = require('express');
const app = express();

const {getGame, addGame} = require('./controller/controller');


const router = express.Router();

app.get('/api', getGame, (req, res) => {
    res.status(200).json(res.locals.game);
});

app.post('/add', addGame, (req, res) => {
    res.status(200).json(res.locals.game);
});
app.listen(1234);
console.log('server listening on port 1234')