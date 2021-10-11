import React from 'react';
import { Rating } from 'semantic-ui-react'
import './Card.css';

function ExpertCard(props)
{
    return(
        <div className='column'>
            <img src= {props.avatar} alt='Expert'/>
            <h3>{props.name}</h3>
            <span>{props.joined}</span>
            <p>{props.position}</p>                
            <Rating icon='star' defaultRating={3} maxRating={5} />            
        </div>
    )
}

export default ExpertCard;
