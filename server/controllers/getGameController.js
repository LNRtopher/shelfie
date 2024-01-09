const myGameShelf = require('../models.js');

const gameController = {};

gameController.getGame = async(req, res, next) => {
    const name = req.params;
    console.log('myGameShelf', myGameShelf);
    const game = await myGameShelf.find({name: "Skull"}).exec();
   
      console.log(game, 'this is the game from db');
        // if(game.name === name){
        //     res.locals.game = game;
        // }
        return next();
  
    // .catch(error => console.log(error))
}
module.exports = gameController;
