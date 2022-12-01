import React, {useEffect, useState} from 'react';

function HallHelp({ data, questionNumber}) {
    const [className, setClassName] = useState("help_hall")
    const [classIcon, setClassIcon] = useState("help_list_users");
    const [question, setQuestion] = useState(null)
    const [changeUserIcon, setChangeUserIcon] = useState("fas fa-users")

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
        if (question) {
            setClassName("help_hall")
        }
    }, [data, questionNumber])

    useEffect(() => {
    }, [className]);

    function handleClick () {
        setClassName("help_hall_active")
        setClassIcon("help_list_users_active")
        setChangeUserIcon("fas fa-users-slash")
    }

    return (
        <div>
            <div className={className}>
                <div className="help_hall_list">
                    <ul>
                        {
                            question && question?.answers.map((list) => {
                                return (
                                    <div className="list" key={list?.id}>
                                        <div className="help_hall_percent">
                                            <div className="percent_query">
                                                <div className="list"> {list?.percent}</div>
                                                <div style={{background: list?.color, width: "20px", height: list?.percent}} ></div>
                                            </div>
                                        </div>
                                        <div className="border"></div>
                                        <li className="list"> {list?.id}. </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <li className={classIcon} onClick={handleClick}>
                <i className={changeUserIcon}></i>
            </li>
        </div>
    );
}

export default HallHelp;