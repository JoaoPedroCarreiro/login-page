import { memo } from "react"
import StyledEnterSection from "../styles/EnterSection.styled"

function EnterSection({children}) {
    return (
        <StyledEnterSection>
            {children}
        </StyledEnterSection>
    )
}

export default memo(EnterSection)