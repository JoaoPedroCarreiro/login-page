import styled from "styled-components"

const StyledEnterSection = styled.section`
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

    @media only screen and (max-width: 480px) {
        h2 {
            font-size: 1.4rem;
        }
        
        .googleLogin,
        .sub-button {
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 360px) {
        h2 {
            font-size: 1.25rem;
        }
        
        .enter-section-content {
            gap: 30px;
        }
        
        .googleLogin,
        .sub-button {
            font-size: 11px;
        }
    }
`

export default StyledEnterSection