import StyledApp from "../styles/App.styled"
import StyledWelcome from "../styles/Welcome.styled"

function App() {
    return (
        <StyledApp data-testid="app">
            <StyledWelcome>
                <div className="welcome-content">
                    <h1>Welcome to Cherry</h1>
                    <p>Here is where yours dreams become true</p>
                </div>
            </StyledWelcome>
        </StyledApp>
    )
}

export default App