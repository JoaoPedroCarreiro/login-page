import { useState, forwardRef, useRef, useEffect } from "react"

import StyledInput from "../styles/Input.styled"

const Input = forwardRef(({id, type, name, pattern, invalidMessage}, ref) => {
    const inputRef = useRef(0)
    
    const [value, setValue] = useState(0)
    const [passwordView, setPasswordView] = useState(false)

    const viewButton = 
        <button id={`view-pass-${id}`} aria-label={`view-pass-${id}`} className="viewPass" type="button" onClick={() => setPasswordView(!passwordView)}>
            <i className={`bi bi-${passwordView ? "un" : ""}lock`}></i>
        </button>

    return (
        <StyledInput className="floating">
            <input
                name={id}
                id={id}
                pattern={pattern}
                className={`Input ${(type === "password") ? "password" : ""}`}
                type={(type === "password") ? (passwordView ? "text" : "password") : type}
                maxLength={48}
                placeholder={name}
                ref={ref && inputRef}
                onChange={(element) => setValue(element.target.value)}
                onInvalid={(event) => event.preventDefault()}
                // required
            />
            <label htmlFor={id}>{name}</label>
            <span className="invalid-message">{(value) ? invalidMessage : "Field cannot be empty"}</span>
            {(type === "password") ? viewButton : <></>}
        </StyledInput>
    )
})

export default Input