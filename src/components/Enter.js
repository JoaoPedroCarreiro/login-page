import { useEffect, useRef, useState } from "react"

import StyledEnter from "../styles/Enter.styled"

import EnterSection from "./EnterSection"

function Enter() {
    const [state, setState] = useState({
        curSection: 1,
        sectionsLength: 0,
        passwordView: false
    })

    const sectionsRef = useRef(0)
    const leftArrowRef = useRef(0)
    const rightArrowRef = useRef(0)

    const passwordRef = useRef(0)

    useEffect(() => {
        setState(state => ({...state, sectionsLength: sectionsRef.current.querySelectorAll(".enter-section").length}))
    }, [])

    const moveOrSubmit = (direction) => {
        const directions = {
            "left": {
                value: 0,
                addition: -1,
                ref: leftArrowRef
            },
            "right": {
                value: state.sectionsLength - 1,
                addition: 1,
                ref: rightArrowRef
            }
        }

        return (state.curSection === directions[direction].value) ?
            (() => {
                directions[direction].ref.current.type = "submit"
            })()
        :
            (() => {
                directions[direction].ref.current.type = "button"
                setState(state => ({...state, curSection: state.curSection + directions[direction].addition}))
            })()
    }

    const onInvalid = (event) => {
        console.log(event.target)
    }

    return (
        <StyledEnter sectionsLength={state.sectionsLength}>
            <div className="arrows">
                <button
                    id="left-arrow"
                    aria-label="Left Arrow"
                    form="form-login"
                    type="button"
                    ref={leftArrowRef}
                    onClick={() => moveOrSubmit("left")}
                ><i className={`bi bi-${(state.curSection === 0) ? "check" : "arrow-left-short"}`}></i></button>
                <button
                    id="right-arrow"
                    aria-label="Right Arrow"
                    form="form-signup"
                    type="button"
                    ref={rightArrowRef}
                    onClick={() => moveOrSubmit("right")}
                ><i className={`bi bi-${(state.curSection === state.sectionsLength - 1) ? "check" : "arrow-right-short"}`}></i></button>
            </div>
            <div className="sections" ref={sectionsRef} style={{left: -state.curSection * 550}}>
                <form
                    // onSubmit={(event) => event.preventDefault()}
                    action="/"
                    method="GET"
                    name="form-login"
                    id="form-login"
                    autoComplete="off"
                >
                    <EnterSection section="login" type="password" />
                    <EnterSection section="login" type="email" />
                </form>
                <EnterSection section="login" type="password">
                    <p>dsda</p>
                </EnterSection>
                <form
                    // onSubmit={(event) => {}}
                    onInvalid={(event) => onInvalid(event)}
                    action="/"
                    method="GET"
                    name="form-signup"
                    id="form-signup"
                    autoComplete="off"
                >
                    <EnterSection section="signup" type="email" />
                    <EnterSection section="signup" type="password" ref={passwordRef} />
                </form>
            </div>
        </StyledEnter>
    )
}

export default Enter