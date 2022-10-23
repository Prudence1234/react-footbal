import React,{useState,useEffect} from 'react';
import './App.css'



 const Standings = () => {
    const [data,setData]=useState([]);
    const [selectLeague,setSelectLeague]=useState([]);
    const [selectYear,setSelectYear]=useState([]);

      useEffect(() => {
      fetch('http://localhost:3001/Standings') 
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setData(data);
      });
}, []);
        
     return(
             <div>
            <select>
            <option>English Premier league</option>
            <option>Champions league</option>
            <option>Laliga league</option>
            <option>EFL league</option>
            <option>league 1</option>
            <option>Bundesliga league</option>
            <option>Europa league</option>
            <option>Vanarama league</option>
            <option>FA super women's league</option>
            <option>Major league soccer</option>
            <option>Fantasy football league</option>
            <option>Serie A prediction</option>
            <option>National football league</option>
            <option>The Spring League</option>
            </select>
            <select>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            </select>
            </div>
   )
 
}
 export default Standings
