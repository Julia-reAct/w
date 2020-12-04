import React from 'react'
import {connect} from "react-redux";
import LongCard from "./LongCard";




const CardCity=(props)=>{
  
  let state =  props.parametr 
    let longcard = state.map(c => <LongCard  key={c.id} name={c.name} main={c.main} weather={c.weather} clouds={c.clouds} wind={c.wind} id={c.id} />)

    return (
      <div >               
         
          <div>{longcard}</div>
      </div>

  );
}


const mapStateToProps=(state)=>({
  parametr: state.cardspage.parametr,
  savecity: state.cardspage.savecity

})

export default connect(mapStateToProps, {}) (CardCity)
