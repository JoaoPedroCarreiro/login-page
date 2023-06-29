import { useEffect, useState } from "react"

import StyledEnter from "../styles/Enter.styled"

import EnterSection from "./EnterSection"

function Enter() {
    const [state, setState] = useState({
        curSection: 0,
        sectionsLength: 0
    })

    useEffect(() => {
        setState(state => ({...state, sectionsLength: document.querySelector(".sections").childNodes.length}))
    }, [])

    useEffect(() => {
        document.querySelector(".sections").style.left = `${-state.curSection * 550}px`
    }, [state.curSection])

    return (
        <StyledEnter sectionsLength={state.sectionsLength}>
            <div className="arrows">
                <button
                    id="left-arrow"
                    aria-label="Left Arrow"
                    onClick={() => setState(state => ({...state, curSection: state.curSection - 1}))}
                    disabled={(state.curSection === 0) ? true : false}
                ><i className="bi bi-arrow-left-short"></i></button>
                <button
                    id="right-arrow"
                    aria-label="Right Arrow"
                    onClick={() => setState(state => ({...state, curSection: state.curSection + 1}))}
                    disabled={(state.curSection === state.sectionsLength - 1) ? true : false}
                ><i className="bi bi-arrow-right-short"></i></button>
            </div>
            <form action="/" className="sections" autocomplete="off">
                <EnterSection type="login">
                    <div className="floating">
                        <input type="email" id="email" maxLength={256} placeholder="Email" />
                        <label htmlFor="email">Email</label>
                    </div>
                </EnterSection>
                <EnterSection type="login">
                    bbbbb
                </EnterSection>
                <EnterSection type="login">
                    ccccc
                </EnterSection>
            </form>
        </StyledEnter>
    )
}

export default Enter