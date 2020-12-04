import React from 'react'
import { NavLink } from 'react-router-dom'

console.log(localStorage)

const ShortCards=(props)=>{
  debugger
  let name = props.name

  let City = ()=>{
    debugger
    console.log (props)
    const state = JSON.parse(localStorage.getItem ('inform')|| '{}')
    state[props.name]= props
    localStorage.setItem('inform', JSON.stringify(state))
  }

  let element = props.weather.map(w => <Weather key={w.id} description={w.description} icon={w.icon} />)
 
  return( 
     <div>
       <NavLink to = {'/card/'+ props.id } >
      <div>{props.name}  {props.main.temp} </div>
       {element}
  </NavLink>
  <div>
    <button onClick={City} >Add</button>
  </div>
  <button onClick={()=>{props.getCards(name) 
      debugger}}> Update</button>
    </div>
    
  )
}

 const Weather =(props) =>{
   return(<div>
     {props.description} {props.icon}
   </div>

   )
 }


export default ShortCards


//name={c.name} temp={c.main.temp}
// description={c.weather.description} icon={c.weather.icon}
/*let local =localStorage.setItem('inform', JSON.stringify(props))
let inform = Object.values(localStorage);

    let all = JSON.parse(inform)
    
    console.log(all.name)
    debugger

     props.saveCards(all)
debugger
  }
*/