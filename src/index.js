import React from "react"
import ReactDOM from "react-dom/client"
import App from "./javascript/App"
import "./stylesheets/App.css"
import "./stylesheets/landing.css"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
