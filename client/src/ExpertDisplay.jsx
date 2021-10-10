import React from 'react';
import ExpertCard from './ExpertCard';
import './index.css';
import './Card.css';
import expertList from './ExpertList';

function  populateCards(expert, index)
{
    return <ExpertCard
    avatar = {expert.avatar}
    name = {expert.name}
    position = {expert.position}
    >
    </ExpertCard>
}
function ExpertDisplay()
{
    return(
        <div className='container row'>
            {expertList.map(populateCards)}            
            
        </div>
        
    )
}
export default ExpertDisplay;