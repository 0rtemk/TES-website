import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js'

const app = ReactDOMClient.createRoot(document.getElementById("app"))


app.render(<App />)