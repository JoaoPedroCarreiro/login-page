import { render, screen } from "@testing-library/react"

import "@testing-library/jest-dom"
import App from "./App"

it("App", () => {
    render(<App />)

    const app = screen.getByTestId("app")
    expect(app).toBeInTheDocument()
})