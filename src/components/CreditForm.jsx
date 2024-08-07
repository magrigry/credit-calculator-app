import Form from 'react-bootstrap/Form';
import {FormControl, InputGroup} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import i18n from "i18next";

export default function CreditForm({calculator, setCalculator}) {

    const handleAmountChange = function (e) {
        setCalculator({
            ...calculator,
            debt: {
                ...calculator.debt,
                amount: Number(e.target.value),
            }
        })
    }

    const handleDurationChange = function (e) {
        setCalculator({
            ...calculator,
            debt: {
                ...calculator.debt,
                duration_in_y: Number(e.target.value),
            }
        })
    }

    const handleCreditRateChange = function (e) {
        setCalculator({
            ...calculator,
            debt: {
                ...calculator.debt,
                credit_rate: Number(e.target.value),
            }
        })
    }

    const handleEstimatedYieldChange = function (e) {
        setCalculator({
            ...calculator,
            debt: {
                ...calculator.debt,
                estimated_yield: Number(e.target.value),
            }
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>{i18n.t('debt.amount')}</Form.Label>
                <InputGroup>
                    <Form.Control type="number" min="1" value={calculator.debt.amount} onChange={handleAmountChange} />
                    <InputGroup.Text >€</InputGroup.Text>
                </InputGroup>
                <FormRange min="0" max="1000000" step="1" value={calculator.debt.amount} onChange={handleAmountChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>{i18n.t('Years')}</Form.Label>
                <InputGroup>
                    <Form.Control type="number" min={1} value={calculator.debt.duration_in_y} onChange={handleDurationChange} />
                    <InputGroup.Text>{i18n.t('years')}</InputGroup.Text>
                </InputGroup>
                <FormRange min="0" max="50" step="1" value={calculator.debt.duration_in_y} onChange={handleDurationChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>{i18n.t('credit.rate')}</Form.Label>
                <InputGroup>
                    <Form.Control type="number" min={0.1} step={0.1} value={calculator.debt.credit_rate} onChange={handleCreditRateChange} />
                    <InputGroup.Text>%</InputGroup.Text>
                </InputGroup>
                <FormRange min="0" max="30" step="1" value={calculator.debt.credit_rate} onChange={handleCreditRateChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>{i18n.t('credit.yield')}</Form.Label>
                <InputGroup>
                    <Form.Control type="number" min={0.1} step={0.1} placeholder="Enter estimated yield" value={calculator.debt.estimated_yield} onChange={handleEstimatedYieldChange} />
                    <InputGroup.Text>%</InputGroup.Text>
                </InputGroup>
                <FormRange min="0" max="30" step="1" value={calculator.debt.estimated_yield} onChange={handleEstimatedYieldChange} />
            </Form.Group>
        </Form>
    );
}
