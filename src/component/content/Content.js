import React from 'react';
import {useNavigate} from "react-router-dom";
import Icon from '../../images/icon.png'

function Content() {
    const navigate = useNavigate()

    const handleClick = () => {
        let name = prompt("Ի՞նչ է Ձեր անունը");
        navigate('/main',{
            state: {name}
        });
    }

    return (
        <div className='content'>
            <div className="content_list">
                <img src={Icon}/>
                <span> Հարգելի խաղացող: </span>
                <span className="text">
                    Բարի գալուստ «Ո՞վ է ուզում դառնալ միլիոնատեր» ինտելեկտուալ խաղ:
                    Ձեզ սպասվում է 15 հարց 5000000 ձեռք բերելու համար:
                </span>
                <span> Այսպիսով դուք պատրաստ ե՞ք </span>
                <div className="button_list">
                    <button className="yes" onClick={handleClick}> ԱՅՈ </button>
                    <button className="no" onClick={() => alert("Գնացեք պատրաստվելու")}> ՈՉ </button>
                </div>
            </div>
        </div>
    );
}

export default Content;