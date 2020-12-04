import React from 'react'
import { NavLink } from 'react-router-dom'



const Keys = (props) =>{
  let City = ()=>{
    debugger
    console.log (props)
    const state = JSON.parse(localStorage.getItem ('inform')|| '{}')
    delete state[props.name]
    localStorage.setItem('inform', JSON.stringify(state))
  }
    debugger
    let name = props.name

    let element = props.weather.map(w => <Weather key={w.id} description={w.description} icon={w.icon} />)
   
    return( 
       <div>
         <NavLink to = {'/card'+props.id }  >
        <div>{props.name}  {props.main.temp} </div>
         {element}
    </NavLink>
    <div>
      <button onClick={City} >Delete</button>
    </div>
    <button onClick={()=>{props.getCards(name) 
        debugger}}> Update</button>
      </div>
      
    )}

    const Weather =(props) =>{
        return(<div>
          {props.description} {props.icon}
        </div>
     
        )
      }
     


 

export default Keys
