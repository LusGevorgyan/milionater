import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import 'animate.css';
import '../../style/style.css';
import {data, money} from "../../querys/Query";
import StopWatch from '../../images/StopWatch.png';
import PlayersAnnouncerImage from '../../images/PlayersAnnouncerImage.png'
import Timer from "../timer/Timer";
import Forms from "../forms/Forms";
import MoneyList from "../moneyList/MoneyList";
import HallHelp from "../help/HallHelp";
import PhoneHelp from "../help/PhoneHelp";
import Help from "../help/GiveUp";

function Main() {
    const location = useLocation();
    let promptNameParams = location.state.name

    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState("$ 0")

    useEffect(() => {
        questionNumber > 1 && setEarned(money.find(m => m.id === questionNumber - 1).amount)
    }, [money, questionNumber])

    return (
        <div className="App">
            <MoneyList
                questionNumber={questionNumber}
                setEarned={setEarned}
            />

            <div className="main">
                <div className="info_text">
                    <p> Բարի գալուստ «Ո՞վ է ուզում դառնալ միլիոնատեր» ինտելեկտուալ խաղ, Հարգելի {promptNameParams}</p>
                </div>
                <div className="help">
                    <ul className="help_ul">
                        <Help
                            data={data}
                            questionNumber={questionNumber}
                        />
                        <HallHelp
                            data={data}
                            questionNumber={questionNumber}
                        />
                        <PhoneHelp
                            data={data}
                            questionNumber={questionNumber}
                        />
                    </ul>
                </div>
                {
                    stop ? (<h1> You earned: {earned}</h1>) :
                        (
                            <>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <div className="top">
                                        <div className="timer">
                                            <img src={StopWatch}/>
                                            <Timer
                                                setStop={setStop}
                                                questionNumber={questionNumber}
                                            />
                                            </div>
                                        <div className="images">
                                            <img src={PlayersAnnouncerImage}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <Forms
                                        data={data}
                                        setStop={setStop}
                                        questionNumber={questionNumber}
                                        setQuestionNumber={setQuestionNumber}
                                    />
                                </div>
                            </>
                        )
                }
            </div>
        </div>
    );
}

export default Main;
