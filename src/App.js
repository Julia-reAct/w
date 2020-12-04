import React from 'react'
import './App.css'
import {Route } from "react-router";
import CardCity from "./Components/Card/Card"
import NameCardsFind from './Components/Find/Find';


const App = (props)=>{
  return (

    <div>
      <Route path='/' exact render={()=><NameCardsFind />} />
       <Route path='/card' render={()=><CardCity />} /> 
    </div>

  );
}

export default App;
