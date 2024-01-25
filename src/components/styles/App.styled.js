import styled from "styled-components"

const StyledApp = styled.div`
    width: var(--app-width);
    height: var(--app-height);
    background-color: white;

    z-index: 1;

    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateY(50%) translateX(-50%);

    box-shadow: 0px 4px 14px 5px rgba(0, 0, 0, .35);
`

export default StyledApp