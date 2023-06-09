import { FormControl } from "react-bootstrap"

function InputText() {
    return (
        <>
            <label className="input-group-text b-radius" htmlFor="email-sign"><i className="bi bi-person"></i></label>
            <FormControl className="b-radius" type="text" id="email-sign"></FormControl>
        </>
    )
}

export default InputText