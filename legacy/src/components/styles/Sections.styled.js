import styled from "styled-components"

const Sections = styled.div`
    display: flex;
    position: relative;
    
    min-width: ${props => props.sectionsLength * 100}%;
    height: 100%;

    left: calc(-1 * ${props => props.curSection} * var(--app-width));

    transition: left 0.5s ease-in-out;
    
    & > * {
        height: 100%;
        padding-top: 24px;

        display: inline-block;
    }
`

export default Sections