import React from 'react';
import Input from './Input';

function LocationTime(prop)
{
    return (
        <div>
            <h3>Location and Time</h3>        
                <div className = 'vertical-left-layout'>
                {prop.taskType === 'in-person' ?                       
                    <Input                                   
                    type = 'text'
                    text = 'Suburb:'
                    name = 'task_suburb'
                    className = 'text'
                    placeholder = 'Please enter a suburb....'
                    onChange = {(event) => prop.setTaskSuburb(event.target.value)}                    
                    />
                    : null }                   
                </div>
                                                           
                <div className = 'vertical-left-layout'>           
                    <Input
                    type = 'text'
                    text = 'Date:'
                    name = 'task_date'
                    className = 'text'
                    placeholder = '01 Jan 2021'
                    onChange = {(event) => prop.setTaskDate(event.target.value)}                    
                    />
                </div>
        </div>
    )
}

export default LocationTime;