import React from 'react'
import {connect} from 'react-redux'
import LongCard from './LongCard'
import s from './Card.module.css'

const CardCity = (props) => {
    const c =
        props.cities[props.match.params.cityName] ||
        props.citiesSaved[props.match.params.cityName]

    if (c) {
        return (
            <div className={s.cardPage}>
                <LongCard
                    key={c.id}
                    name={c.name}
                    main={c.main}
                    weather={c.weather}
                    clouds={c.clouds}
                    wind={c.wind}
                    id={c.id}
                />
            </div>
        )
    }

    return <div>Not Found</div>
}

const mapStateToProps = (state) => ({
    cities: state.cardspage.cities,
    citiesSaved: state.cardspage.citiesSaved
})

export default connect(mapStateToProps, {})(CardCity)
