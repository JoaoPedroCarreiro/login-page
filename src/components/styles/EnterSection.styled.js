import styled from "styled-components"

const StyledEnterSection = styled.div`
    width: var(--app-width);
    height: 100%;
    
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

    @media only screen and (max-width: 480px) {
        h2 {
            font-size: 1.4rem;
        }
        
        .googleLogin,
        .forgot-pass {
            font-size: 12px;
        }
    }
`

export default StyledEnterSection