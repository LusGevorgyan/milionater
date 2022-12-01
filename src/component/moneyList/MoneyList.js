import React, {useEffect, useState} from 'react';
import {money} from "../../querys/Query";
import '../../style/style.css'

function MoneyList({questionNumber, setEarned}) {
    const [untouchableAmount, setUntouchableAmount] = useState("untouchable_amount");

    useEffect(() => {
        questionNumber > 1 && setEarned(money.find(m => m.id === questionNumber - 1).amount)
    }, [money, questionNumber]);

    return (
        <div className="pyramid">
            <div className="moneyList">
                {
                    money && money.map(data => {
                        return (
                            <li key={data?.id} className={questionNumber === data?.id ? "moneyListItem active": "moneyListItem"} >
                                <span className="moneyListItemNumber">{data?.id}</span>
                                <div className={questionNumber === data?.id ? "active_rotate": "moneyListItem"}></div>
                                <span className="moneyListItemAmount">{data?.amount}</span>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MoneyList