//https://www.youtube.com/watch?v=i8fAO_zyFAM - accessed 12/10/2021
//https://levelup.gitconnected.com/how-to-search-filter-through-data-in-react-26f1545fe3a1 - accessed 12/10/2021
import React, {useEffect, useState} from 'react';
import PopUpCard from './PopUpCard';
import axios from 'axios';
import TaskCard from './TaskCard';



function FindTask (props){    
    const [allData, setAllData] = useState([{
        _id: '',
        type: '',
        title: '',
        description: '',
        suburb: '',
        date: '',        
        rate: '',
        amount: ''
    }])
    const [filteredData, setFilteredData] = useState(allData);
    const [clickData, setClickData] = useState([{
        type: '',
        title: '',
        description: '',
        suburb: '',
        date: '',        
        rate: '',
        amount: ''

    }])
       
    

    function searchHandler(event)
    {
        let value = event.target.value;
        let result = [];

        console.log(value);

        result = allData.filter((data) => {
            
            return (data.title.search(value) !== -1 || data.suburb.search(value) !== -1 || data.date.search(value) !== -1)
        });
        

        setFilteredData(result);
        
    }

    const [showPopUp, setShowPopUp] = useState(false);
    
    function activatePopUp(value)
    {
       
        setShowPopUp(prev => !prev)
        setClickData(value)
                
    }

    /**function  populateCards(task)
    {
        
        return(
            <div className = 'container column-tasks'>
                             
                <TaskCard             
                title = {task.title}
                description = {task.description}
                suburb = {task.suburb}
                date = {new Date(task.date).toLocaleDateString('en-GB')}                
                >
                </TaskCard>
              
            </div>
            )
    }    */ 

    useEffect(() => {
        axios('http://localhost:8080/findtask')
        .then(response => {
            console.log(response.data)

            setAllData(response.data);

            setFilteredData(response.data);
        })
        .catch(error => {
            console.log('Error getting task data: ' + error);
        })
        /**fetch('http://localhost:8080/findtask')
        .then(response => response.json())
        .then(data => setTasks(data))
        .then(data => console.log()); */
    }, []);   
    
    return (        

        <div className='container'>                     
                <div className = 'horizontal-layout-search'>                
                    <div className = 'horizontal-layout-search search'>
                        <i className = 'search icon'></i>       
                        <input
                        className ='text'                                       
                        type = 'search'
                        text = 'Search Tasks:'                                   
                        placeholder='Title, Suburb or Date'                                                
                        onChange = {searchHandler}
                        />                                   
                    </div>
                </div>            
            <div className='container row'>                         
                {filteredData.map((value, index) => {
                    
                    return (
                        <div key = {value.id} className = 'column-tasks' onClick = {() => activatePopUp(value)}>                            
                            <TaskCard
                            _id = {value._id}            
                            type = {value.type}                            
                            title = {value.title}
                            description = {value.description}
                            suburb = {value.suburb}
                            date = {value.date}//{new Date(value.date).toLocaleDateString('en-GB')}
                            rate = {value.rate}
                            amount = {value.amount}                            
                            >                                                      
                            </TaskCard>                                                                                                                                                
                        </div>                        
                        )                        
                })}
            </div>            
            <div className = 'horizontal-layout'>            
            <PopUpCard            
            type = {clickData.type}
            title = {clickData.title}
            description = {clickData.description}
            suburb = {clickData.suburb}
            date = {clickData.date}
            rate = {clickData.rate}
            amount = {clickData.amount}         
            showPopUp = {showPopUp}
            setShowPopUp = {setShowPopUp}
            ></PopUpCard>
            </div>          
        </div>
    )
}

export default FindTask;