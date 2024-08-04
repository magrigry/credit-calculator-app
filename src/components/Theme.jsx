import Form from "react-bootstrap/Form";
import {Moon} from "react-bootstrap-icons";

export default function Theme() {

    return <Form className="d-flex m-5 flex-row-reverse">
        <Moon className="m-1"></Moon>
        <Form.Check
            type="switch"
            id="custom-switch"
        />
    </Form>

}