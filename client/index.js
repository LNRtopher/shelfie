import React from "react";
import {createRoot} from "react-dom/client";
import App from './components/App.jsx';
import {Provider} from  'react-redux'

const root = createRoot(document.getElementById('root'))
root.render(
        <App />
)