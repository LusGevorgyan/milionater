import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function GiveUp() {
    const [classIcon, setClassIcon] = useState("help_giveUp");
    const navigate = useNavigate()

    function handleClick() {
        alert("Give Up?")
        navigate('/');
    }

    return (
        <div>
            <li className={classIcon} onClick={handleClick}>
                <i style={{color: "#ef9035"}} className="fas fa-money-bill"></i>
            </li>
        </div>
    );
}

export default GiveUp;