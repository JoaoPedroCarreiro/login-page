import styled from "styled-components"

const StyledEnter = styled.div`
    position: relative;

    min-width: 100%;
    height: 45%;

    overflow: hidden;

    .arrows {
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: space-between;

        z-index: 1;
    }

    .arrows i {
        font-size: 24px;
        color: #1a1f25;
    }

    .sections {
        position: relative;

        min-width: ${props => props.sectionsLength * 100}%;
        height: 100%;

        transition: left 0.5s ease-in-out;
    }

    .sections > * {
        height: 100%;
        display: inline-block;
    }
`

export default StyledEnter