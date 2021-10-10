import React from 'react';
import './Card.css';

function TaskCard(props)
{
    return(
        <div className='column'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <p>{props.suburb}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default TaskCard;
