import { memo } from "react"
import StyledEnterSection from "../styles/EnterSection.styled"

function EnterSection({children, type}) {
    const types = {
        "signup": "SIGNUP",
        "login": "LOGIN"
    }

    return (
        <StyledEnterSection>
            <div className="enter-section-content">
                <h2>{types[type]}</h2>
                {children}
            </div>
        </StyledEnterSection>
    )
}

export default memo(EnterSection)