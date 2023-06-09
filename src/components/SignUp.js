import { Container, Form, InputGroup } from "react-bootstrap"
import StyledSignUp from "../styles/SignUp.styled"
import InputText from "./InputText"

function SignUp() {
    return (
        <Container>
            <StyledSignUp>
                <h2>SIGN UP</h2>
                <Form>
                    <InputGroup>
                        <InputText />
                    </InputGroup>
                </Form>
            </StyledSignUp>
        </Container>
    )
}

export default SignUp