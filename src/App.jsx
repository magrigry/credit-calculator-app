import { useState } from 'react'
import CreditForm from "./components/CreditForm.jsx";
import InvestForm from "./components/InvestForm.jsx";
import {Card, Col, Container, Row} from "react-bootstrap";
import {InvestTypes} from "./enums/InvestTypes.js";
import ResultChart from "./components/ResultChart.jsx";
import Theme from "./components/Theme.jsx";
import i18n from "i18next";
import Resume from "./components/Resume.jsx";
import Glossary from "./components/Glossary.jsx";

function App() {

  const [calculator, setCalculator] = useState({
      debt: {
            amount: 100_000,
            duration_in_y: 15,
            credit_rate: 4,
            estimated_yield: 4,
      },
      compare_to: Object.keys(InvestTypes)[0],

      calculateMonthlyCreditCost: function () {
          let principal = this.debt.amount;
          let duration = this.calculateDurationInMonth();
          let decimalRate = this.calculateDecimalRate();

          return Number(principal * decimalRate * Math.pow((1 + decimalRate), duration) / (Math.pow(1 + decimalRate, duration) - 1));
      },

      calculateDecimalRate: function () {
          return (this.debt.credit_rate / 100) / 12;
      },

      calculateRent: function () {
          return Number(this.debt.amount * (this.debt.estimated_yield / 100) / 12)
      },

      calculateDurationInMonth: function () {
          return Number(this.debt.duration_in_y * 12);
      },

      calculateEffort: function () {
          return Number(this.calculateMonthlyCreditCost() - this.calculateRent());
      },

      calculateTotalInterestRateCost: function () {
         return Number(this.calculateMonthlyCreditCost() * 12 * this.debt.duration_in_y - this.debt.amount);
      }
  })

  return (
      <>
          <Theme/>
          <div>
              <h1 className="m-5 text-center">{i18n.t('title')}</h1>
          </div>
          <Container fluid>
              <Row className="justify-content-center mx-5">
                  <Col lg={12} xxl={2}>
                      <CreditForm calculator={calculator} setCalculator={setCalculator}/>
                      <hr className="m-5"/>
                      <InvestForm calculator={calculator} setCalculator={setCalculator}/>
                  </Col>
                  <Col lg={12} xxl={3} className={"px-0 px-xxl-5 my-5 my-lg-0"}>
                    <Resume calculator={calculator}/>
                  </Col>
                  <Col lg={12} xxl={6}>
                      <ResultChart calculator={calculator}/>
                  </Col>
              </Row>
          </Container>

          <hr className="m-5"/>

          <Container className={"m-5"}>
              <h2>{i18n.t('title.glossary')}</h2>
              <Glossary/>
          </Container>
      </>
  )
}

export default App
