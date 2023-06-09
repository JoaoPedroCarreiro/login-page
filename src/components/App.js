import StyledApp from "../styles/App.styled"
import StyledWelcome from "../styles/Welcome.styled"

import Enter from "./Enter"

function App() {
    return (
        <StyledApp data-testid="app">
            <StyledWelcome>
                <div className="welcome-content">
                    <h1>Welcome to Cherry</h1>
                    <p>Here is where your dreams become true</p>
                </div>
            </StyledWelcome>
            <Enter />
        </StyledApp>
    )
}

export default App