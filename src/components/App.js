import { lazy, Suspense } from "react"
import { GoogleOAuthProvider } from '@react-oauth/google'

import Background from "./Background"
import Enter from "./Enter"

import StyledWelcome from "../styles/Welcome.styled"

const StyledApp = lazy(() => import("../styles/App.styled"))

function App() {
    return (
        <>
            <Background/>
            <Suspense fallback={<></>}>
                <StyledApp data-testid="app">
                    <StyledWelcome>
                        <div className="welcome-content">
                            <h1>Welcome to Cherry</h1>
                            <p>Here is where your dreams become true</p>
                        </div>
                    </StyledWelcome>
                    <GoogleOAuthProvider clientId="308971518851-b6n5kkl3hb1fee30es6m57ch1ao511g3.apps.googleusercontent.com">
                        <Enter />
                    </GoogleOAuthProvider>
                </StyledApp>
            </Suspense>
        </>
    )
}

export default App