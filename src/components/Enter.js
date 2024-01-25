import { useCallback, useEffect, useRef, useState } from "react"

import StyledEnter from "./styles/Enter.styled"

import EnterSection from "./EnterSection"
import Sections from "./styles/Sections.styled"

function Enter() {
    const [state, setState] = useState({
        curSection: 1,
        sectionsLength: 0,
        passwordView: false,
        style: {}
    })

    const sectionsRef = useRef(0)
    const leftArrowRef = useRef(0)
    const rightArrowRef = useRef(0)

    const passRef = useRef(0)

    useEffect(() => {
        setState(state => ({ ...state, sectionsLength:sectionsRef.current.querySelectorAll(".enter-section").length }))
    }, [])

    const keyPressHandler = useCallback((event) => {
        const arrows = {
            "login": leftArrowRef,
            "signup": rightArrowRef
        }

        if(event.key === "Enter") {
            try {
                event.preventDefault()
                arrows[sectionsRef.current.querySelectorAll(".enter-section").item(state.curSection).getAttribute("section")].current.click()
            } catch (error) {}
        }
    }, [state.curSection])

    useEffect(() => {
        window.addEventListener("keypress", keyPressHandler)
        return () => {
            window.removeEventListener("keypress", keyPressHandler)
        }
    }, [keyPressHandler])

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

    const onSubmitLogIn = (event) => {
        let error = false

        const inputs = {
            email: event.currentTarget["email-login"],
            password: event.currentTarget["pass-login"]
        }
        
        for(const key in inputs) {
            const input = inputs[key]

            if(!input.value) {
                input.toggleAttribute("required")
                event.currentTarget.checkValidity()
                error = true
            }
        }

        if(!error) { // Here is where the code to send to server goes
            window.location.reload()
        }
    }

    const onSubmitSignUp = (event) => {
        passRef.current.checkPassMatch()

        let error = false

        const inputs = {
            email: event.currentTarget["email-signup"],
            username: event.currentTarget["username-signup"],
            password: event.currentTarget["pass-signup"],
            confirm: event.currentTarget["confirm-signup"]
        }
        
        for(const key in inputs) {
            const input = inputs[key]

            if(!input.value) {
                input.toggleAttribute("required")
                event.currentTarget.checkValidity()
                error = true
            }
        }

        if(!error) { // Here is where the code to send to server goes
            window.location.reload()
        }
    }

    const onInvalid = (event, formDirection) => {
        passRef.current.checkPassMatch()

        for(const section of sectionsRef.current.querySelectorAll(".enter-section").entries()) {
            const index = section[0]
            const item = section[1]
           
            const input = item.querySelector(`#floating-${event.target.id}`)
            
            if(input) {
                input.classList.remove("use-invalid-animation")
                setTimeout(() => {
                    input.style.animationDelay = `${0.5 * ((formDirection === "right") ? (state.sectionsLength - 1) - index : index)}s`
                    input.classList.add("use-invalid-animation")
                }, 1)

                setState(state => ({...state, curSection: index}))
            }
        }
    }

    return (
        <StyledEnter>
            <div className="arrows">
                <button
                    id="left-arrow"
                    aria-label="Left Arrow"
                    form="form-login"
                    type="button"
                    ref={leftArrowRef}
                    onClick={() => moveOrSubmit("left")}
                ><i className={`bi bi-${(state.curSection === 0) ? "check" : "arrow-left-short"}`}></i></button>
                <div className="already-acc-parent">
                    <label htmlFor="right-arrow" className="sub-button already-acc" hidden={(state.curSection === 1) ? false : true}>
                        Not have an account yet?
                    </label>
                    <button
                        id="right-arrow"
                        aria-label="Right Arrow"
                        form="form-signup"
                        type="button"
                        ref={rightArrowRef}
                        onClick={() => moveOrSubmit("right")}
                    ><i className={`bi bi-${(state.curSection === state.sectionsLength - 1) ? "check" : "arrow-right-short"}`}></i></button>
                </div>
            </div>
            <Sections ref={sectionsRef} sectionsLength={state.sectionsLength} curSection={state.curSection}>
                <form
                    onSubmit={(event) => {event.preventDefault(); onSubmitLogIn(event)}}
                    onInvalid={(event) => onInvalid(event, "left")}
                    name="form-login"
                    id="form-login"
                    autoComplete="off"
                >
                    <EnterSection section="login" type="password" />
                    <EnterSection section="login" type="email" />
                </form>
                <form
                    onSubmit={(event) => {event.preventDefault(); onSubmitSignUp(event)}}
                    onInvalid={(event) => onInvalid(event, "right")}
                    name="form-signup"
                    id="form-signup"
                    autoComplete="off"
                >
                    <EnterSection section="signup" type="email" />
                    <EnterSection section="signup" type="password" ref={passRef} />
                </form>
            </Sections>
        </StyledEnter>
    )
}

export default Enter