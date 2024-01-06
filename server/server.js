const express = require('express');
const app = express();
const path = require('path');
//const {getGame, addGame} = require('./controllers/controller');
const mongoose = require('mongoose');
const router = express.Router();
//mongosh "mongodb+srv://new_user:J44rih6CcIVFjmYN@cluster0.eiuf1d9.mongodb.net/?retryWrites=true&w=majority" --apiVersion 6012 --username new_user

const uri = "mongodb+srv://new_user:J44rih6CcIVFjmYN@cluster0.eiuf1d9.mongodb.net/?retryWrites=true&w=majority";
const Game = require("./models.js");
//mongoimport --uri  mongodb+srv://new_user:<enter_password>@cluster0.eiuf1d9.mongodb.net/<enter_database_name>  --collection  <enter_collection_name>  --type  <enter JSON/CSV/TSV>   --file  <enter path/to/file>
const db = mongoose.connect(uri, {
    useNewUrlParser: true,
    dbName: 'myGameShelf'
})
    .then(() => console.log('connected to mongo db.'))
    .catch(err => console.log(err));
Game.insertMany([
    {name: "protoGame",
    numPlayers: [1,4],
    location: "closet",
    playedWith: {Nina: "loved"}
    },
    {name: "betaGame",
    numPlayers: [1,4],
    location: "closet",
    playedWith: {Nina: "loved"}
    }
])
//  const directoryPath = path.join(__dirname, '/');
//         fs.readFile(directoryPath+'/workflow.json', 'utf8', function (err, data) {
//         if (err) throw err;
//         console.log(data);
//         var json = JSON.parse(data);
//         var data = {texto: json};
//         db.collection("workflows").insert(data, function(err, res)     
//             {
//             if (err) throw err;
//             });
//         });


app.use('/build', express.static(path.join(__dirname, '../build')));

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