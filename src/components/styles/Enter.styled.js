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

    .already-acc-parent {
        display: flex;
        align-items: center;
    }

    .already-acc {
        font-size: .85rem;
        opacity: .9;
    }

    @media only screen and (max-width: 480px) {
        .already-acc {
            font-size: .7rem;
        }
    }

    @media only screen and (max-width: 360px) {
        .already-acc {
            font-size: .6rem;
        }
    }
`

export default StyledEnter