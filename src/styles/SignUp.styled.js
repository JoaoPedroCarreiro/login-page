import styled from "styled-components"

const StyledSignUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    margin: 20px 0;

    color: #1a1f25;

    h1, h2, h3, h4, h5, h6 {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
    }

    form {
        padding-top: 10px;
    }

    .b-radius {
        border-radius: 50px;
    }

    .input-group {
        box-shadow: 0px 0px 28px 8px rgba(0, 34, 76, .25);
        border-radius: 50px;
    }

    .input-group-text {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input, input:focus, .input-group-text {
        box-shadow: none;
        border: none;
        background-color: white;
    }

    i {
        font-size: 16px;
    }

    input[type="text"] {
        width: 250px;
        padding-right: 20px;
    }
`

export default StyledSignUp