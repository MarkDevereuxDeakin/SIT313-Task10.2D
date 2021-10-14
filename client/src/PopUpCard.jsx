//https://www.youtube.com/watch?v=i8fAO_zyFAM - accessed 12/10/2021
import React from 'react';
import './Card.css';

function PopUpCard(props)
{
    const type = props.type
    const title = props.title
    const description = props.description
    const suburb = props.suburb
    const date = props.date
    const rate = props.rate
    const amount = props.amount
    
    return (props.showPopUp) ? (
        <div className = 'popup'>
            <div className = 'popup-inner'>            
                <h2>{title}</h2>
                <h4>{type}</h4>
                <h4>{description}</h4>
                <h4>{suburb}</h4>
                <h4>{date}</h4>
                <h4>{rate}</h4>
                <h4>{amount}</h4>
                <button className = 'close-button' onClick = {() => props.setShowPopUp(false)}>x</button>
            </div>        
        </div>) : '';       
    
}

export default PopUpCard;
