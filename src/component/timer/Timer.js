import React, {useState, useEffect} from "react";

const Timer = ({setStop, questionNumber}) => {
        const [timer, setTimer] = useState()

        useEffect(() => {
            if(timer === 0) return setStop(true)
            const interval = setInterval(() => {
               setTimer(prev => prev - 1)
            }, 1000)
            return () => clearInterval(interval)
        }, [setStop, timer]);

        useEffect(() => {
            setTimer(30)
        }, [questionNumber]);

        return(
            <div className="timer_num"> {timer} </div>
        )
}

export default Timer

