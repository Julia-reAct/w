import * as axios from "axios"

export const cardsApi={
    getCards(name){
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=d9279800525f8f4ec68ab9939dc2ace6`,
          )
          .then(response =>{ 
              return response.data
          })
          
    },
    updateCards(city){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d9279800525f8f4ec68ab9939dc2ace6`,
            )
            .then(response =>{  
                return response.data 
            })
            
      }
    
} 
