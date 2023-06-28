import React from "react"
import ReactDOM from "react-dom/client"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"

import App from "./components/App"
import Background from "./components/Background"

const roots = {
    "background": <Background />,
    "app": <App />
}

for(const root in roots) {
    ReactDOM.createRoot(document.getElementById(root)).render(roots[root])
}