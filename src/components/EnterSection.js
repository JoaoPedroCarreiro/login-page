import { memo } from "react"
import { useGoogleLogin } from '@react-oauth/google'

import StyledEnterSection from "../styles/EnterSection.styled"
import Input from "./Input"

function EnterSection({section, type}) {
    const googleLogin = useGoogleLogin({
        onSuccess: () => console.log("success"),
        onError: () => console.log("fail")
    })

    const extras = {
        "login": {
            "email":
                <button type="button" className="googleLogin" onClick={googleLogin}>
                    <span className="bi bi-google"></span><span>Sign in with Google</span>
                </button>,
            "password":
                <button type="button" className="forgot-pass">
                    Forgot your password?
                </button>
        },
        "signup": {
            "email": <Input id="username-signup" type="text" name="Username" />,
            "password": <Input id="confirm-password" type="password" name="Confirm password" />
        }
    }

    return (
        <StyledEnterSection>
            <div className="enter-section-content">
                <h2>{section.toUpperCase()}</h2>
                <div className="floating">
                    <Input id={type + "-" + section} type={type} name={type.charAt(0).toUpperCase() + type.slice(1)} />
                </div>
                {extras[section][type]}
            </div>
        </StyledEnterSection>
    )
}

export default memo(EnterSection)