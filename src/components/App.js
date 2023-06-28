import { lazy, Suspense } from "react"

import StyledWelcome from "../styles/Welcome.styled"
import Background from "./Background"

import Enter from "./Enter"

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
                    <Enter />
                </StyledApp>
            </Suspense>
        </>
    )
}

export default App