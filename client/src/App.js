import React from 'react'
import NavMenu from './NavMenu';
import Header from './Header';
import BottomNavBar from './BottomNavBar'
import ExpertDisplay from './ExpertDisplay';


//Function to export components
function App(){    
    //Return components in the div element
    return(
    <div className = 'container'>
        <Header />
        <NavMenu />
        <ExpertDisplay />               
        <BottomNavBar />
      </div>
    )
}

export default App;