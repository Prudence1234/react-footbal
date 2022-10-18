import React,{useState,useEffect} from 'react';
 import './App.css'


 const Leagues = () => {
     const [data ,setData]=useState([]);

     useEffect(() => {
      fetch('http://localhost:3001/Leagues')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setData(data);
         });
   }, []);

    
   return (
     <div >
     {data.map((props) => {
        return (
           <div  key={props.id} className='display'>
              <img scr={props.image} alt='logo'/>
              <h2 >{props.name}</h2>
              <p >{props.description}</p>
           </div>
        );
     })}
  </div>
   )
 }

 export default Leagues;
