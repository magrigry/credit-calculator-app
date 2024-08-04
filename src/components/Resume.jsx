import {Card} from "react-bootstrap";
import i18n from "i18next";
import {nFormatter} from "../utils/Numbers.js";

export default function Resume({calculator}) {
    return <>
        <Card  className="mx-5 mt-4">
            <Card.Header>{i18n.t('resume')}</Card.Header>
            <Card.Body>
                <p className="text-center">{i18n.t('credit.cost.is')}</p>
                <h1 className="text-center">{nFormatter(calculator.calculateMonthlyCreditCost())} €</h1>
                <div className="mt-4"></div>
                <p className="text-center">{i18n.t('effort.is')}</p>
                <h1 className="text-center">{nFormatter(calculator.calculateEffort())} €</h1>

                <p className="mt-5">
                    <span>{i18n.t('credit.cost')} :</span>
                    <span className="float-end">{nFormatter(calculator.calculateTotalInterestRateCost())} €</span>
                </p>

                <hr/>

                <p >
                    <span>{i18n.t('debt.amount')} :</span>
                    <span className="float-end">{nFormatter(calculator.debt.amount)} €</span>
                </p>
                <p>
                    <span>{i18n.t('credit.duration')} :</span>
                    <span className="float-end">{nFormatter(calculator.debt.duration_in_y)} {i18n.t('years')}</span>
                </p>
                <p>
                    <span>{i18n.t('credit.rate')} :</span>
                    <span className="float-end">{nFormatter(calculator.debt.credit_rate)} %</span>
                </p>
                <p>
                    <span>{i18n.t('credit.yield')} :</span>
                    <span className="float-end">{nFormatter(calculator.debt.estimated_yield)} %</span>
                </p>
                <hr/>

            </Card.Body>
        </Card>
    </>
}