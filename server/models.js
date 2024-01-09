const mongoose = require('mongoose');

const MONGO_URI="mongodb+srv://solo:benisabeast@cluster0.eiuf1d9.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'myGameShelf'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));
  
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {type: String, required: true},
    numPlayers: Array,
    location: String,
    playedWith: Object
});

const Game = mongoose.model('game', gameSchema);

module.exports = Game;
