import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import i18n from "../i18n.js";
import {PureComponent, useState} from "react";
import {nFormatter} from "../utils/Numbers.js";
import {InvestTypes} from "../InvestTypes.js";
class CustomizedYAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props;

        if (payload.value === 0) {
            return null;
        }

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={-3} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                    {nFormatter(payload.value, 0)}
                </text>
            </g>
        );
    }
}

class CustomizedXAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={-3} y={0} dy={16} textAnchor="end" fill="#666">
                    {Number(payload.value) / 12}
                </text>
            </g>
        );
    }
}

export default function ResultChart({calculator}) {

    const [hide, setHide] = useState({});

    const isHidden = function (key) {
        return key in hide && hide[key] === true;
    }

    const handleLegendClick = (o) => {
        const key = o.dataKey;
        setHide({
            ...hide,
            [key]: !isHidden(key)
        })
    };

    let duration_in_month = calculator.debt.duration_in_y * 12;
    let invest_yield = InvestTypes[calculator.compare_to] / 100;
    let effort =  calculator.calculateEffort();
    let monthly_credit_cost = calculator.calculateMonthlyCreditCost();

    let prev_credit = 0;
    let prev_invests = 0;
    let cash_flow = 0;
    let interest = 0;
    let interest_cost = calculator.calculateTotalInterestRateCost();

    const data = [...Array(duration_in_month + 1).keys()].map((i) => {

        if (i === 0) {
            return { x: 0, y1: 0, y2: 0, y3: 0, y4: interest_cost};
        }

        prev_invests = Number(effort + prev_invests * (invest_yield / 12) + prev_invests);
        cash_flow = Number(effort + cash_flow);
        interest = Number(calculator.calculateDecimalRate() * (calculator.debt.amount - prev_credit));
        interest_cost = Number(interest_cost - interest);
        prev_credit = Number((monthly_credit_cost - interest) + prev_credit);

        return {
            x: i,
            y1: prev_credit.toFixed(2),
            y2: prev_invests > 0 ? prev_invests.toFixed(2) : 0,
            y3: cash_flow < 0 ? Number(Math.abs(cash_flow)).toFixed(2) : 0,
            y4: interest_cost.toFixed(2),
        }
    }).filter((data) => {
        return data.x % 12 === 0;
    });

    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart width={"100%"} height={600} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line hide={isHidden('y1')} name={i18n.t('chart.capital.credit')} type="monotone" dataKey="y1" stroke="#8884d8" />
                <Line hide={isHidden('y2')} name={i18n.t('chart.capital.invest')} type="monotone" dataKey="y2" stroke="#82ca9d" />
                <Line hide={isHidden('y3')} name={i18n.t('chart.cashflow')} type="monotone" dataKey="y3" stroke="#000000" />
                <Line hide={isHidden('y4')} name={i18n.t('chart.interest')} type="monotone" dataKey="y4" stroke="#FF314F" />
                <CartesianGrid stroke="#ccc" />
                <XAxis label={{ value: i18n.t('years'), angle: 0, position: 'top' }} dataKey="x" tick={<CustomizedXAxisTick />} />
                <YAxis domain={[0, Math.max(calculator.debt.amount, interest_cost, cash_flow, prev_credit, prev_invests)]} label={{ value: i18n.t('€') }}  tick={<CustomizedYAxisTick />} />
                <Legend onClick={handleLegendClick} />
                <Tooltip formatter={(value, name) => [nFormatter(value), name]} />
            </LineChart>
        </ResponsiveContainer>
    );
}