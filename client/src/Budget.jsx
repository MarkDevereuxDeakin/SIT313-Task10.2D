import React from 'react';
import Input from './Input';

function Budget (prop)
{
    return (
        <div>
            <h3>Budget</h3>
            <div className = 'horizontal-layout'>            
                <div className = 'horizontal-layout'>
                    <div className = 'main-label'><label>Budget Estimate:</label></div>
                </div>            
            
                <div className = 'horizontal-layout' >
                    <div className = 'label'><label for = 'total'>Total:</label></div>
                    <input            
                    type = 'radio'
                    text = 'Total:'
                    name = 'task_rate'                    
                    className = 'total'
                    value = 'Total'
                    checked =  {prop.taskRate === 'Total'}
                    onChange = {() => prop.setTaskRate('Total')}                   
                        />
                </div>

                <div className = 'horizontal-layout' >
                    <div className = 'label'><label for = 'hourly'>Hourly:</label></div>
                    <input
                    type = 'radio'
                    text = 'Hourly:' 
                    name = 'task_rate'                      
                    className = 'hourly' 
                    value = 'Hourly'
                    checked =  {prop.taskRate === 'Hourly'}
                    onChange = {() => prop.setTaskRate('Hourly')}                    
                        />                
                </div>
            </div> 
            
            <div className = 'vertical-left-layout'>
                <Input                
                type = 'text'
                text = 'Amount:'
                name = 'task_amount'
                className = 'amount'
                placeholder = '$....'
                onChange = {(event) => prop.setTaskAmount(event.target.value)}                
                />
            </div>
        </div>
    )
}

export default Budget;