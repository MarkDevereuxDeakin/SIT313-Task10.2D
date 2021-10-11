import React, {useEffect, useState} from 'react';
import TaskCard from './TaskCard'
import './index.css';
import './Card.css';

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

function FindTask (prop){
    const [tasks, setTasks] = useState([{
        type: '',
        title: '',
        description: '',
        suburb: '',
        date: '',        
        rate: '',
        amount: ''
    }])

    useEffect(() => {
        fetch('http://localhost:8080/findtask')
        .then(response => response.json())
        .then(data => setTasks(data))
        .then(data => console.log());
    })
    return (
        <div className='container row'>
            {tasks.map(populateCards)}            
            
        </div>
    )
}

export default FindTask;