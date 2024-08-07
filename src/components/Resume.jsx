import {Alert, Card, Col, Row} from "react-bootstrap";
import i18n from "i18next";
import {nFormatter} from "../utils/Numbers.js";
import {InvestTypes} from "../InvestTypes.js";

export default function Resume({calculator}) {
    return <>
        <Card>
            <Card.Header>{i18n.t('resume')}</Card.Header>
            <Card.Body>
                <p className="text-center">{i18n.t('credit.cost.is')}</p>
                <h1 className="text-center">{nFormatter(calculator.calculateMonthlyCreditCost())} €</h1>
                <div className="mt-4"></div>
                <p className="text-center">{i18n.t('effort.is')}</p>
                <h1 className="text-center">{nFormatter(calculator.calculateEffort())} €</h1>

                <Row className="mt-5">
                    <Col xs={12} sm={8} >{i18n.t('credit.cost')} :</Col>
                    <Col xs={12} sm={4}>{nFormatter(calculator.calculateTotalInterestRateCost())} €</Col>
                </Row>

                <hr/>

                <Row >
                    <Col xs={12} sm={8} >{i18n.t('debt.amount')} :</Col>
                    <Col xs={12} sm={4}>{nFormatter(calculator.debt.amount)} €</Col>
                </Row>

                <Row >
                    <Col xs={12} sm={8} >{i18n.t('credit.duration')} :</Col>
                    <Col xs={12} sm={4}>{nFormatter(calculator.debt.duration_in_y)} {i18n.t('years')}</Col>
                </Row>

                <Row >
                    <Col xs={12} sm={8} >{i18n.t('credit.rate')} :</Col>
                    <Col xs={12} sm={4}>{nFormatter(calculator.debt.credit_rate)} %</Col>
                </Row>

                <hr/>

                <Row >
                    <Col xs={12} sm={8} >{i18n.t('credit.yield')} :</Col>
                    <Col xs={12} sm={4}>{nFormatter(calculator.debt.estimated_yield)} %</Col>
                </Row>

                <hr/>

                <Row >
                    <Col xs={12} sm={8} >{i18n.t('compare.invest.with')}</Col>
                    <Col xs={12} sm={4}>{calculator.compare_to}</Col>
                </Row>
                <Alert variant={"info"} className={"mt-3"}>
                    En prenant en compte un rendement moyen du {calculator.compare_to} de {nFormatter(InvestTypes[calculator.compare_to])} % sur les 10 dernières années.
                </Alert>
            </Card.Body>
        </Card>
    </>
}