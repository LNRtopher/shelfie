const mongoose = require('mongoose');
const uri = "mongodb+srv://new_user:J44rih6CcIVFjmYN@cluster0.eiuf1d9.mongodb.net/?retryWrites=true&w=majority";

//mongoimport --uri  mongodb+srv://new_user:<enter_password>@cluster0.eiuf1d9.mongodb.net/<enter_database_name>  --collection  <enter_collection_name>  --type  <enter JSON/CSV/TSV>   --file  <enter path/to/file>
const db = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'myGameShelf'
})
    .then(() => console.log('connected to mongo db.'))
    .catch(err => console.log(err));

const path = require('path');
       const directoryPath = path.join(__dirname, '/');
        fs.readFile(directoryPath+'/workflow.json', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
        var json = JSON.parse(data);
        var data = {texto: json};
        db.collection("workflows").insert(data, function(err, res)     
            {
            if (err) throw err;
            });

        });