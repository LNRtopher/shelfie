const mongoose = require('mongoose');
const uri = "mongodb+srv://new_user:J44rih6CcIVFjmYN@cluster0.eiuf1d9.mongodb.net/?retryWrites=true&w=majority";

//mongoimport --uri  mongodb+srv://new_user:<enter_password>@cluster0.eiuf1d9.mongodb.net/<enter_database_name>  --collection  <enter_collection_name>  --type  <enter JSON/CSV/TSV>   --file  <enter path/to/file>
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'myGameShelf'
})
    .then(() => console.log('connected to mongo db.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {type: String, required: true},
    numPlayers: Array,
    location: String,
    playedWith: Object
});

const Game = mongoose.model('game', gameSchema);

module.exports = {Game};
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);