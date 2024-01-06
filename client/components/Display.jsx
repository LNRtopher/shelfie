import React from "react";

const Display = () => {
    const findGame = () => {
       const input = document.getElementById("game-name");
       const gameName = input.value;

        fetch(`/api/${gameName}`)
        .then(data => data.json)
        .then(jsonData => console.log(jsonData))
    }
    return (
        <div>
            <h5>find my game</h5>
        <form onSubmit={findGame}>
            <input id="game-name" placeholder="title" required/>
            <input id="game-name" type="submit" value="find"/>
        </form>
        </div>
    )
}
export default Display;