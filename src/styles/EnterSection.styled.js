import styled from "styled-components"

const StyledEnterSection = styled.div`
    width: 550px;
    height: 100%;
    padding-top: 24px;

    display: inline-block;

    .enter-section-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }

    input {
        width: 350px;
    }
`

export default StyledEnterSection