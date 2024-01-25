import { lazy, Suspense, useEffect } from "react"
import { GoogleOAuthProvider } from '@react-oauth/google'

import Background from "./Background"
import Enter from "./Enter"

import Welcome from "./styles/Welcome.styled"

const StyledApp = lazy(() => import("./styles/App.styled"))

function App() {
    useEffect(() => {
        window.addEventListener("resize", () => {
            document.body.toggleAttribute("stop-transitions")
    
            setTimeout(() => {
                document.body.removeAttribute("stop-transitions")
            }, 1)
        })
    }, [])

    return (
        <>
            <Background/>
            <Suspense fallback={<></>}>
                <StyledApp data-testid="app">
                    <Welcome>
                        <div className="welcome-content">
                            <h1>Welcome to Cherry</h1>
                            <p>Here is where your dreams become true</p>
                        </div>
                    </Welcome>
                    <GoogleOAuthProvider clientId="308971518851-b6n5kkl3hb1fee30es6m57ch1ao511g3.apps.googleusercontent.com">
                        <Enter />
                    </GoogleOAuthProvider>
                </StyledApp>
            </Suspense>
        </>
    )
}

export default App