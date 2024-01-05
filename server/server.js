const express = require('express');
const app = express();
const path = require('path');
//const {getGame, addGame} = require('./controllers/controller');


const router = express.Router();

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req,res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})
// app.get('/api', getGame, (req, res) => {
//     return res.status(200).json(res.locals.game);
// });

// app.post('/add', addGame, (req, res) => {
//     return res.status(200).json(res.locals.game);
// });
app.listen(3000);
console.log('server listening on port 3000')