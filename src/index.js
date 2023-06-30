import React from "react"
import ReactDOM from "react-dom/client"

import { GoogleOAuthProvider } from '@react-oauth/google'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"

import "./styles/css/style.css"
import "./styles/css/form.css"

import App from "./components/App"

ReactDOM.createRoot(document.getElementById("app")).render(
    <GoogleOAuthProvider clientId="308971518851-b6n5kkl3hb1fee30es6m57ch1ao511g3.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
)