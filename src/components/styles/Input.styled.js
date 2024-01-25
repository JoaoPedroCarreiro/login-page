import styled from "styled-components"

const StyledInput = styled.div`
    input {
        width: 350px;
        position: relative;
    }

    input:is(:invalid) {
        border-image: linear-gradient(45deg, rgb(160, 17, 17) 0%, rgb(49, 0, 0) 100%) 1;
    }

    input:is(:invalid) + label {
        color: rgb(160, 17, 17);
    }

    input:is(:invalid) + label + span {
        visibility: visible;
    }

    .password {
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

    .invalid-message {
        font-size: 12px;

        position: absolute;
        top: 100%;
        right: 0;

        color: rgb(49, 0, 0);

        visibility: hidden;
    }

    @media only screen and (max-width: 480px) {
        input {
            width: 240px;
            font-size: .8rem;
        }

        label {
            font-size: .8rem;
        }

        .invalid-message {
            font-size: 10px;
        }
    }

    @media only screen and (max-width: 360px) {
        input {
            width: 220px;
            font-size: .75rem;
        }

        label {
            font-size: .75rem;
        }

        .invalid-message {
            font-size: 9px;
        }
    }
`

export default StyledInput