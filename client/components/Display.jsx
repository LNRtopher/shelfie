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
        <div className="displaySearch">
        
            <p>
            <form onSubmit={findGame}>
                <label>where is that game?</label>
                <input className="input" id="game-name" placeholder="what's that game called?" required/>
                <input className="button" id="game-name" type="submit" value="find"/>
             </form>
            </p>
        </div>
    )
}
export default Display;