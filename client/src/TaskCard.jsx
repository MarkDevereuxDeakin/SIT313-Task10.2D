import React from 'react';
import axios from 'axios';
import './Card.css';


function deleteTask(id)
{
    axios.delete('http://localhost:8080/delete', {data:{_id: id}})
            .then((res) => {
                console.log(res.data)
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            });
    
};

function TaskCard(props)
{
    const _id = props._id;
    const type = props.type;
    const title = props.title;
    const description = props.description;
    const suburb = props.suburb;
    const date = props.date;
    const rate = props.rate;
    const amount = props.amount;    
    
    return(
        <div className = 'container column-tasks'>
            <h4>Title: {title}</h4>            
            <p>Info: {description}</p>
            <p>Suburb: {suburb}</p>
            <p>Date: {date}</p>
            <button className = 'delete-button' onClick = {() => deleteTask(_id)}>DELETE</button>                 
        </div>
    )
}

export default TaskCard;
