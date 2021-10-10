import React from 'react';
import TaskCard from './TaskCard';
import './index.css';
import './Card.css';
import taskList from './TaskList';

function  populateCards(task, index)
{
    return <TaskCard
    title = {task.title}
    description = {task.description}
    suburb = {task.suburb}
    date = {task.date}
    >
    </TaskCard>
}
function ExpertDisplay()
{
    return(
        <div className='container row'>
            {taskList.map(populateCards)}            
            
        </div>
        
    )
}
export default ExpertDisplay;