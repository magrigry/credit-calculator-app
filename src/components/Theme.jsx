import Form from "react-bootstrap/Form";
import {Moon} from "react-bootstrap-icons";
import {useEffect, useState} from "react";

export default function Theme() {

    const [isDark, setDark] = useState(true);

    const handleSwitch = function (e) {
        setDark(!isDark);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return <Form className="d-flex m-5 flex-row-reverse">
        <Moon className="m-1"></Moon>
        <Form.Check
            type="switch"
            id="custom-switch"
            checked={isDark} onChange={handleSwitch}
        />
    </Form>

}