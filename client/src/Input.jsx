import React, {useState} from 'react';
import './Input.css';

function Input (prop)
{
   const [checked, setChecked] = useState('');

    return(
        <div className = 'horizontal-layout'>      
            <div className = 'label'>
            <label for = {prop.class}>{prop.text}</label>
            </div>
            <div className = 'float-input' onClick = {() => setChecked(prop.value)}>                                                    
                <input
                 type = {prop.type}
                 id = {prop.id}
                 className = {prop.class}
                 name = {prop.name} 
                 value = {prop.value} 
                 placeholder = {prop.placeholder}
                 rows = {prop.rows}
                 cols = {prop.cols}
                 checked =  {checked === prop.value}
                 multiple = {prop.multiple}
                 accept = {prop.accept}                                                                          
                 />
                 
            </div>             
        </div>
    )
}

export default Input;

            
