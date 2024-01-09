import React, { Component } from 'react';
//import AddGame from './AddGame.jsx'
import Display from './Display.jsx';
import '../style.css';
// import boardGame from '../images/boardGame.jpg'

const App = () => {
  
    return (
            <div className="main">
                <h1>my game shelfie</h1>
                
                <div className="displaySearch">
                <Display/>
                </div>
                
            </div>
            
        )
}

export default App;