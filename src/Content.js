import React,{useState} from 'react'
import './App.css'
import Standings from './Standings'
import Leagues from './Leagues'


const Content = () => {

  const [active ,setActive]=useState([]);

function Click(){
  return(
  setActive(true)
  )}
  
function Clicked(){
  return(
  setActive(false)
  )}
  return (
    
    <div className='content'>
       <div className='tab-standings' onClick={Click}>
          <button>Standings</button>
       </div>
       <div className='tab-leagues' onClick={Clicked}>
        <button>Leagues</button>

     </div>
       
     {active ? <Standings/> :<Leagues/>}
     
     </div>
  )
}

export default Content
