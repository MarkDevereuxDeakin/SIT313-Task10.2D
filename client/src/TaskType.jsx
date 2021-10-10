import React from 'react';
import './Input.css'

function TaskType (prop)
{
    
    return (
        <div>
            <h3>New Task</h3>
            <div className = 'horizontal-layout'>            
                <div className = 'horizontal-layout'>
                    <div className = 'main-label'><label>Select a Task Type:</label></div>
                </div>
                <div className = 'horizontal-layout' >
                    <div className = 'label'><label for = 'in-person'>In Person</label></div>
                    <input            
                    type = 'radio'
                    text = 'In Person'
                    name = 'task_type'                    
                    className = 'in-person'
                    value = 'in-person'
                    checked =  {prop.taskType === 'in-person'}
                    onChange = {() => prop.setTaskType('in-person')}                   
                        />
                </div>
                <div className = 'horizontal-layout' >
                    <div className = 'label'><label for = 'online'>Online</label></div>
                    <input
                    type = 'radio'
                    text = 'Online' 
                    name = 'task_type'                      
                    className = 'online' 
                    value = 'online'
                    checked =  {prop.taskType === 'online'}
                    onChange = {() => prop.setTaskType('online')}                    
                        />                
                </div>
            </div>
            </div>                
    )
}

export default TaskType;