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

    i {
        font-size: 24px;
        color: #1a1f25;
    }

    .sections {
        position: relative;

        min-width: ${props => props.sectionsLength * 100}%;
        height: 100%;

        transition: left 0.5s ease-in-out;
    }

    #pass {
        padding-right: calc(20px + 0.25rem);
    }

    .viewPass {
        position: absolute;
        top: 50%;
        right: 0;
        
        transform: translateY(calc(-50% - 1px));
    }

    .viewPass i {
        font-size: 20px;
    }

    .forgot-pass {
        font-family: "Open Sans", sans-serif;
        opacity: .75;
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
`

export default StyledEnter