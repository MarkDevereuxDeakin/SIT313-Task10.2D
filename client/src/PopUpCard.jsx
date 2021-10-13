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
    
    return(
        <div className = 'container column-tasks'>
            {props.showPopUp ? <div>
            <h4>Title: {title}</h4>
            <p>Task Type: {type}</p>
            <p>Info: {description}</p>
            <p>Suburb: {suburb}</p>
            <p>Date: {date}</p>
            <p>Rate {rate}</p>
            <p>Amount: {amount}</p>
            </div> : null}         
        </div>
    )
}

export default PopUpCard;
