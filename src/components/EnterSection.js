import { memo, forwardRef, useRef, useImperativeHandle, useEffect } from "react"
import { useGoogleLogin } from '@react-oauth/google'

import StyledEnterSection from "./styles/EnterSection.styled"
import Input from "./Input"

const EnterSection = forwardRef(({children, section, type}, ref) => {
    const passRef = useRef(0)
    const confirmRef = useRef(0)

    const selfRef = useRef(0)

    useEffect(() => {
        if(!section) return
        selfRef.current.setAttribute("section", section)
    }, [section])
    
    useImperativeHandle(ref, () => {
        return {
            checkPassMatch() {
                return confirmRef.current.setCustomValidity(passRef.current.value === confirmRef.current.value ? "" : "Passwords mismatch")
            }
        }
    }, [])

    const googleLogin = useGoogleLogin({
        onSuccess: () => { alert("Logging in with google"); window.location.reload() },
        onError: () => { alert("Error when trying to log in with google"); window.location.reload() }
    })
    
    const templates = {
        "login": {
            "email":
                <>
                    <Input id="email-login" type="email" name="Email" invalidMessage="Please enter a valid email" />
                    <button id="button-google-login" aria-label="button-google-login" type="button" className="googleLogin" onClick={googleLogin}>
                        <span className="bi bi-google"></span><span>Sign in with Google</span>
                    </button>
                </>,
            "password":
                <>
                    <Input id="pass-login" type="password" name="Password" />
                    <button id="button-forgot-pass" aria-label="button-forgot-pass" type="button" className="sub-button">
                        Forgot your password?
                    </button>
                </>
        },
        "signup": {
            "email": 
                <>
                    <Input id="email-signup" type="email" name="Email" invalidMessage="Please enter a valid email" />
                    <Input
                        id="username-signup" type="text" name="Username"
                        pattern="(?=.*[^\{\}~\|\u00b4\u0060¨])[a-zA-Z0-9_\-áàâãéèêíïóôõöúûçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+"
                        invalidMessage="Username cannot contains special characters except by _-"
                    />
                </>,
            "password": 
                <>
                    <Input
                        id="pass-signup" type="password" name="Password"
                        pattern="(?=.*[a-zA-Z])(?=.*[0-9]).{8,35}" ref={passRef}
                        invalidMessage="Password must contain letters, numbers and 8-35 characters" />
                    <Input id="confirm-signup" type="password" name="Confirm password" ref={confirmRef} invalidMessage="Passwords must match" />
                </>
        }
    }

    return (
        <StyledEnterSection ref={selfRef} className="enter-section">
            {
                (section && !children) ?
                    <div className="enter-section-content">
                        <h2>{section.toUpperCase()}</h2>
                        {templates[section][type]}
                    </div>
                :
                    children
            }
        </StyledEnterSection>
    )
})

export default memo(EnterSection)