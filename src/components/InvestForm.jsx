import Form from "react-bootstrap/Form";
import {useState} from "react";
import {InvestTypes} from "../InvestTypes.js";
import i18n from "i18next";
import {Alert} from "react-bootstrap";

export default function InvestForm({calculator, setCalculator}) {

    const handleInvestTypeChange = function (e) {
        setCalculator({
            ...calculator,
            compare_to: e.target.value,
        })
    }

    return <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{i18n.t('compare.invest.with')}</Form.Label>
            <Form.Select onChange={handleInvestTypeChange} value={calculator.compare_to} >
                {Object.entries(InvestTypes).map(([key]) =>
                    <option key={key} value={key}>{key}</option>
                )}
            </Form.Select>
        </Form.Group>
        <Alert variant={"info"}>
            Simule l'investissement en DCA avec un investissement mensuel dans l'indice sélectionné. La valeur mensuelle investie correspond à l'effort que nécessite le crédit.
        </Alert>
    </>
}

