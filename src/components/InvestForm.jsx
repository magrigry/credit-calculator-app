import Form from "react-bootstrap/Form";
import {useState} from "react";
import {InvestTypes} from "../enums/InvestTypes.js";

export default function InvestForm({calculator, setCalculator}) {

    const handleInvestTypeChange = function (e) {
        setCalculator({
            ...calculator,
            compare_to: InvestTypes[e.target.value],
        })
    }

    return <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Compare to investment</Form.Label>
            <Form.Select onChange={handleInvestTypeChange} value={calculator.compare_to} >
                {Object.entries(InvestTypes).map(([key, value]) =>
                    <option key={key} value={key}>{value}</option>
                )}
            </Form.Select>
        </Form.Group>
    </>
}

