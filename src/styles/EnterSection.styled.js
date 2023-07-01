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

    .googleLogin {
        padding: 5px 10px;

        display: flex;
        gap: 20px;

        border-radius: 3px;

        color: white;
        font-size: 16px;
    
        background-color: #1a1f25;
        opacity: .9;

        font-family: "Open Sans", sans-serif;
    }

    .forgot-pass {
        font-family: "Open Sans", sans-serif;
        opacity: .75;
    }
`

export default StyledEnterSection