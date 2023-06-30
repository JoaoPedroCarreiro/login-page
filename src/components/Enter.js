import { useEffect, useRef, useState } from "react"

import StyledEnter from "../styles/Enter.styled"

import EnterSection from "./EnterSection"

function Enter() {
    const [state, setState] = useState({
        curSection: 0,
        sectionsLength: 0,
        passwordView: false
    })

    const sectionsRef = useRef(0)

    useEffect(() => {
        setState(state => ({...state, sectionsLength: sectionsRef.current.childNodes.length}))
    }, [])

    const moveOrSubmit = (direction) => {
        const directions = {
            "left": {
                value: 0,
                addition: -1
            },
            "right": {
                value: state.sectionsLength - 1,
                addition: 1
            }
        }

        return (state.curSection === directions[direction].value) ?
            sectionsRef.current.submit()
        :
            setState(state => ({...state, curSection: state.curSection + directions[direction].addition}))
    }

    return (
        <StyledEnter sectionsLength={state.sectionsLength}>
            <div className="arrows">
                <button
                    id="left-arrow"
                    aria-label="Left Arrow"
                    form="form"
                    type="button"
                    onClick={() => moveOrSubmit("left")}
                ><i className={`bi bi-${(state.curSection === 0) ? "check" : "arrow-left-short"}`}></i></button>
                <button
                    id="right-arrow"
                    aria-label="Right Arrow"
                    form="form"
                    type="button"
                    onClick={() => moveOrSubmit("right")}
                ><i className={`bi bi-${(state.curSection === state.sectionsLength - 1) ? "check" : "arrow-right-short"}`}></i></button>
            </div>
            <form
                onSubmit={() => console.log("s")}
                action="/"
                method="GET"
                id="form"
                className="sections"
                ref={sectionsRef}
                style={{left: -state.curSection * 550}}
                autoComplete="off"
            >
                <EnterSection section="login" type="password" />
                <EnterSection section="login" type="email" />
                <EnterSection section="signup" type="email" />
                <EnterSection section="signup" type="password" />
            </form>
        </StyledEnter>
    )
}

export default Enter