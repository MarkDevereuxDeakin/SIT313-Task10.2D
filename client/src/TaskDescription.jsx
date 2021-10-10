import React from 'react';
import Input from './Input.jsx';


function TaskDescription (prop)
{   
    return (
        <div>
            <h3>Task Description</h3>
            <div className = 'vertical-left-layout'>
                <Input              
                type = 'text'
                text = 'Task Title:'
                name = 'task_title' 
                className = 'text'
                placeholder = 'Please enter a title....'                
                onChange = {(event) => prop.setTaskTitle(event.target.value)}                
                />
            </div>
            <div className = 'vertical-left-layout'>
                <Input
                type = 'textarea'
                text = 'Task Description:'
                name = 'task_description'
                class = 'description'                
                placeholder = 'Please describe the task....'                
                onChange = {(event) => prop.setTaskDescription(event.target.value)}
                rows = '500'
                cols = '40'
                />                
            </div>
        </div>

    )
}
export default TaskDescription;