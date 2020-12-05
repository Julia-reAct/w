import {cardsApi} from '../API/api'

const SET_WEATHER = 'SET_WEATHER'
const SET_WEATHER_CITY = 'SET_WEATHER_CITY'
const DELETE_WEATHER = 'DELETE_WEATHER'
const DELETE_WEATHER_CITY = 'DELETE_WEATHER_CITY'

const initialState = {
    cities: {},
    citiesSaved:JSON.parse(localStorage.getItem('citiesSaved') || '{}'),
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            const cities = {
                ...state.cities,
                [action.city.name]: action.city
            }
            return {
                ...state,
                cities: cities,
            }
        }
        case SET_WEATHER_CITY: {
            const citiesSaved = {
                ...state.citiesSaved,
                [action.citySaved.name]: action.citySaved,
            }
            localStorage.setItem('citiesSaved', JSON.stringify(citiesSaved))
            return {
                ...state,
                citiesSaved: citiesSaved,
            }
        }
        case DELETE_WEATHER_CITY: {
            const storedCities = JSON.parse(localStorage.getItem('citiesSaved') || '{}')
            if (storedCities[action.name]) {
                delete storedCities[action.name]
                localStorage.setItem('citiesSaved', JSON.stringify(storedCities))
            }
            return {
                ...state,
                citiesSaved: Object.entries(state.citiesSaved).reduce((result, [key, value]) => {
                    if (key !== action.name) {
                        result[key] = value
                    }

                    return result
                }, {})
            }
        }
        case DELETE_WEATHER: {
            return {
                ...state,
                cities: Object.entries(state.cities).reduce((result, [key, value]) => {
                    if (key !== action.name) {
                        result[key] = value
                    }

                    return result
                }, {})
            }
        }
        default:
            return state
    }
}
export const SetCity = (city) => ({type: SET_WEATHER, city})
export const SetCitySaved = (citySaved) => ({type: SET_WEATHER_CITY, citySaved})
export const DeleteCity = (name) => ({ type: DELETE_WEATHER, name })
export const DeleteCitySaved = (name) => ({ type: DELETE_WEATHER_CITY, name })

export const getCards = (name) => async (dispatch) => {
    let data = await cardsApi.getCards(name)
    dispatch(SetCity(data))
}
export const updateCard = (city) => async (dispatch) => {
    let data = await cardsApi.updateCards(city)
    dispatch(SetCitySaved(data))
}

export const deleteCard = (cityName) => (dispatch) => {
    dispatch(DeleteCitySaved(cityName))
}

export const addCard = (city) => (dispatch) => {
    dispatch(SetCitySaved(city))
    dispatch(DeleteCity(city.name))
}

export default cardsReducer
