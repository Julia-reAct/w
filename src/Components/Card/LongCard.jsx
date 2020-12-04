import React from 'react'


const LongCard=(props)=>{
  

  let element1 = props.weather.map(w => <Weather1 key={w.id} description={w.description} icon={w.icon} />)
 
  return(  <div>
    <div>{props.name} {props.main.temp}
     {props.clouds.all}  {props.main.humidity}
      </div>
  <div> {element1} </div>
  <div>{props.main.feels_like} {props.main.pressure} </div>
  <div>{props.main.temp_min} {props.main.temp_max}</div>
  <div>{props.main.sea_level} {props.main.grnd_level}</div>
  <div>{props.wind.speed}{props.wind.deg}{props.wind.gust}</div>
    </div>
  
  )
}
 const Weather1 =(props) =>{
   return(<div>
     {props.description} {props.icon}
   </div>

   )
 }

export default LongCard