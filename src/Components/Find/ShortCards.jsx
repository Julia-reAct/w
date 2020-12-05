import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ShortCards.module.css'
const ShortCards=(props)=>{
  let name = props.name

  let Add = ()=>{
      props.addCard(props)
  }

  let element = props.weather.map(w => <Weather key={w.id} description={w.description} icon={w.icon} />)
 
  return(
      <NavLink to={'/w/card/' + props.name} className={styles.card}>
          <div className={styles.city}>
              {props.name}
          </div>
          <div className={styles.temp}>
              { Math.floor(props.main.temp - 273.15)} °C
          </div>
          <div className={styles.element}>
              {element}
          </div>
          <div>
              <div className={styles.buttons}>
                  <button onClick={Add}>Add</button>
                  <button onClick={() => {
                      props.getCards(name)
                  }}> Update
                  </button>
              </div>
          </div>
      </NavLink>
  )
}

 const Weather =(props) =>{
   return(<div>
     {props.description}
   </div>

   )
 }


export default ShortCards
