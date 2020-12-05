import React from 'react'
import './App.css'
import {Route } from "react-router";
import CardCity from "./Components/Card/Card"
import Finder from './Components/Find/Find';


const App = (props)=>{
  return (
    <div>
      <Route path='/' exact component={Finder} />
       <Route path='/card/:cityName' component={CardCity} />
    </div>

  );
}

export default App;
