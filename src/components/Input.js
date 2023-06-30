import { useState } from "react"

function Input({id, type, name}) {
    const [passwordView, setPasswordView] = useState(false)

    const viewButton = 
        <button className="viewPass" type="button" onClick={() => setPasswordView(!passwordView)}>
            <i className={`bi bi-${passwordView ? "un" : ""}lock`}></i>
        </button>

    return (
        <div className="floating">
            <input
                name={id}
                id={id}
                type={(type === "password") ? (passwordView ? "text" : "password") : type}
                maxLength={48}
                placeholder={name}
            />
            <label htmlFor={id}>{name}</label>
            {(type === "password") ? viewButton : <></>}
        </div>
    )
}

export default Input