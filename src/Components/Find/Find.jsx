import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getCards, saveCards} from "../../Redux/ReducerCards";
import ShortCards from './ShortCards';
import Keys from './Keys';


const CityForm =({handleSubmit} ) => { 
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                type='text' 
                component={(props)=>< input {...props.input}  />}
                 name="name"
                  placeholder='Enter name' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
 const AllReduxForm= reduxForm({form: 'cards'})(CityForm)


const NameCardsFind = (props) => {
    
    let state1 = props.parametr 
   
    let shortcards = state1.map(c => <ShortCards saveCards={props.saveCards} getCards={props.getCards} key={c.id} name={c.name} main={c.main} weather={c.weather} clouds={c.clouds} wind={c.wind}  id={c.id} />)
    
    let state2 = props.savecity 
    if(!state2.length){
        const storegdata = JSON.parse(localStorage.getItem('inform') || '{}')
        state2 = Object.values(storegdata)
    }
    let shortcards2 = state2.map(c => <Keys getCards={props.getCards} key={c.id} name={c.name} main={c.main} weather={c.weather} clouds={c.clouds} wind={c.wind} id={c.id} />)
    
      const onSubmit = (FormData) =>{
        props.getCards(FormData.name)

    }
    return (
        <div >
            <div>
            <AllReduxForm onSubmit={onSubmit} />
            </div>        
            {shortcards}       
            <div>
            {shortcards2}
            </div>
        </div>
    
    );
}
const mapStateToProps=(state)=>({ 
    
    parametr: state.cardspage.parametr,
    savecity: state.cardspage.savecity
})

 

export default connect(mapStateToProps, {getCards, saveCards }) (NameCardsFind)

//const shortcards = props.weatherall.map(c =><ShortCards name={c.name} main={c.main} weather={c.weather}/>)
// {shortcards}