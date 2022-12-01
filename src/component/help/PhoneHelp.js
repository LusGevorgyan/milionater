import React, {useEffect, useState} from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";

function PhoneHelp({data, questionNumber}) {
    const [className, setClassName] = useState("help_phone")
    const [classIcon, setClassIcon] = useState("help_list_phone");
    const [changePhoneIcon, setChangePhoneIcon] = useState("fas fa-phone")

    const [question, setQuestion] = useState(null)
    const [resultPhone, setResultPhone] = useState();

    const [text] = useTypewriter({
        words: ['Calling Mobile . . . . . . . . '].concat(resultPhone),
        loop: 2,
    })

    useEffect(() => {
        if (question) {
            setClassName("help_phone")
        }
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber]);

    useEffect(() => {
    }, [className]);

    function result (){
        question?.answers.map(event => {
            if(event?.correct === true) {
                setClassName("help_phone_active")
                setResultPhone(event?.text)
            }
        })
        setClassName("help_phone_active")
        setClassIcon("help_list_phone_active")
        setChangePhoneIcon("fas fa-phone-slash")
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <li className={classIcon} onClick={result}>
                <i className={changePhoneIcon}></i>
            </li>
            <div className={className}>
                <span>{text}</span>
                <Cursor cursorColor='red' />
            </div>
        </div>
    );
}

export default PhoneHelp;