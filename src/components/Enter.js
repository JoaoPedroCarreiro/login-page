import StyledEnter from "../styles/Enter.styled"

function Enter() {
    return (
        <StyledEnter>
            <div className="arrows">
                <button><i className="bi bi-arrow-left-short"></i></button>
                <button><i className="bi bi-arrow-right-short"></i></button>
            </div>
        </StyledEnter>
    )
}

export default Enter