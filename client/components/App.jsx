import React, { Component } from 'react';
//import AddGame from './AddGame.jsx'
import Display from './Display.jsx';
const App = () => {
    const myStyle = {
        display: "flex",
        justifyContent: "center",
        fontFamily: "Sans-serif",
        margin: 0,
        padding: 0,
        color: "#efe5e5",
        backgroundColor: "#1f1d1d"
        }
    
    return (
            <div style={myStyle}>
                <h1>my game shelfie</h1>
                <Display/>
            </div>
            
        )
}

export default App;