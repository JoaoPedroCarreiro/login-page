import welcome from "../../assets/welcome.webp"
import styled from "styled-components"

const Welcome = styled.div`
    position: relative;

    width: 100%;
    height: 55%;

    background: url(${welcome});
    background-position: center;
    background-size: cover;

    color: white;

    &::after {
        content: "";

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: linear-gradient(45deg, rgb(0, 3, 11) 0%, rgb(19, 25, 46) 100%);
        opacity: .8;

        z-index: 0;
    }

    .welcome-content {
        position: relative;
        z-index: 1;

        margin: 0 30px;
        padding-top: 120px;
    }

    h1 {
        font-weight: 300;
        font-size: 1.75rem;
    }

    p {
        font-family: "Raleway", sans-serif;
        font-weight: 200;
        font-size: 1.05rem;
    }

    @media only screen and (max-width: 768px) {
        background-position: center 63%;

        h1 {
            font-size: 1.6rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 576px) {
        background-position: center bottom;

        h1 {
            font-size: 1.35rem;
        }

        p {
            font-size: .90rem;
        }
    }

    @media only screen and (max-width: 480px) {
        background-position: center 40%;

        h1 {
            font-size: 1.35rem;
        }

        p {
            font-size: .90rem;
        }
    }

    @media only screen and (max-width: 360px) {
        .welcome-content {
            padding-top: 90px;
        }
        
        h1 {
            font-size: 1.2rem;
        }

        p {
            font-size: .8rem;
        }
    }
`

export default Welcome