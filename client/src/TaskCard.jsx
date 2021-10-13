import React from 'react';
import './Card.css';

function TaskCard(props)
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
            <h4>Title: {title}</h4>
            <p>Info: {description}</p>
            <p>Suburb: {suburb}</p>
            <p>Date: {date}</p>            
        </div>
    )
}

export default TaskCard;
