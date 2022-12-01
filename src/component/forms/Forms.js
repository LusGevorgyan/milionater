import React, {useState, useEffect} from 'react';
import Victory from "../victory/Victory";

function Forms({data, setStop, questionNumber, setQuestionNumber}) {
    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber]);

    const time = (duration, callback) => {
        setTimeout(() => {
           callback()
        }, duration)
    }

    const handleClick = (text) => {
        setSelectedAnswer(text)
        setClassName("answer active")

        time(2000, () => {
            setClassName(text?.correct ? "answer correct": "answer wrong")
        })

        time(4000, () => {
            if(text?.correct){
                setQuestionNumber((prev) => prev + 1)
                setSelectedAnswer(null)
            } else {
                setStop(true)
            }
        })
    }

    return (
        <div className="forms">
                <div className="questions">{question?.question}</div>
            <div className="answers">
                {
                    question ? (question?.answers.map(text => {
                        return (
                            <div
                                style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px"}}
                                className={selectedAnswer === text ? className: "answer"}
                                onClick={() => handleClick(text)}
                                key={text?.id}
                            >
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <div className="rotate" style={{marginRight: "20px"}}></div>
                                        {text?.id}.
                                    <span style={{marginLeft: "10px"}}>{text?.text}</span>
                                </div>
                                <div className="rotate"></div>
                            </div>
                        )
                    })) : <Victory/>
                }
            </div>
        </div>
    );
}

export default Forms;