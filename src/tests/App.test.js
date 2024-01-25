import { render, screen } from "@testing-library/react"

import "@testing-library/jest-dom"

import App from "../components/App"

describe("App", () => {
    it("App rendered", () => {
        render(<App />)

        const app = screen.getByTestId("app")
        expect(app).toBeInTheDocument()
    })
})