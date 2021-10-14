import React, {useState} from 'react';
import TaskType from './TaskType.jsx';
import TaskDescription from './TaskDescription.jsx';
import LocationTime from './LocationTime.jsx';
import Budget from './Budget';
import ImageUploader from './ImageUploader';


function NewTask()
{   
    const [taskType, setTaskType] = useState('in-person');
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');    
    const [taskSuburb, setTaskSuburb] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskRate, setTaskRate] = useState('Total');
    const [taskAmount, setTaskAmount] = useState('');
    
    const handleClick = () =>
    {       

        fetch('http://localhost:8080/newtask', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                type:taskType,        
                title: taskTitle,
                description: taskDescription,
                suburb: taskSuburb,
                date: taskDate,
                rate: taskRate,
                amount: taskAmount,
            })
            
        })
        .then(response => response.json())
        .then(data => console.log(data))         
        .catch((err => console.log('Error: ' + err)))
        
        window.location.reload(true); 
    }

    return(        
        <form name="newtask" action="http://localhost:8080/newtask" method="POST">
            <TaskType
            taskType = {taskType}
            setTaskType = {setTaskType}/>           
            <TaskDescription
            taskTitle = {taskTitle} 
            setTaskTitle = {setTaskTitle}
            taskDescription = {taskDescription}
            setTaskDescription = {setTaskDescription}
            />
            <ImageUploader />                          
            <LocationTime
            taskType = {taskType}
            taskSuburb = {taskSuburb}
            setTaskSuburb = {setTaskSuburb}
            taskDate = {taskDate}
            setTaskDate = {setTaskDate}
            />   
            <Budget
            taskRate = {taskRate}
            setTaskRate = {setTaskRate}
            taskAmount = {taskAmount}
            setTaskAmount = {setTaskAmount}
            />
            <div className="button-row-right">
              <button type="submit" className="button button-primary" onClick = {handleClick}>Post Task</button>
            </div>    
        </form>
    
    )
}
export default NewTask;

