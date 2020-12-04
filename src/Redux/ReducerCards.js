import {cardsApi} from "../API/api";

const SET_WEATHER ='SET_WEATHER'
const SET_WEATHER_CITY ='SET_WEATHER_CITY'
const initialState={
  parametr: [

  ],
  savecity:[

  ]
}

const cardsReducer=(state= initialState, action)=>{
    switch (action.type){
        case SET_WEATHER:{
            return{
                ...state,
                  parametr: [action.parametr]
            }
        }
        case SET_WEATHER_CITY:{
          return{
              ...state,
              savecity: [...state.savecity,action.savecity]
          }
      }
        default:
            return  state
    }
}
export const Allweather =(parametr) =>({type: SET_WEATHER, parametr})
export const Saveweather =(savecity)=>({type: SET_WEATHER_CITY, savecity})


export const getCards = (name)=> async (dispatch) =>{
  debugger
    let data = await cardsApi.getCards(name)
      dispatch(Allweather(data))
      debugger
    }
    export const saveCards = (city)=> async (dispatch) =>{
      debugger
        let data = await cardsApi.updateCards(city)
          dispatch(Saveweather(data))
          debugger
        }


export default cardsReducer

/*export const saveCards =(inform ) =>{
 debugger
    change( Saveweather(inform))

}
export const saveCards = (city)=> async (dispatch) =>{
      debugger
        let data = await cardsApi.updateCards(city)
          dispatch(Saveweather(data))
          debugger
        }*/