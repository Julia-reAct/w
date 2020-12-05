import React from 'react'
import s from './LongCard.module.css'

const LongCard = (props) => {
    let element1 = props.weather.map(w => <Weather1 key={w.id} description={w.description} icon={w.icon}/>)

    return (
        <div className={s.longCard}>
            <div className={s.header}>
                <p className={s.name}>{props.name}</p>
                <p className={s.temp}>
                    { Math.floor(props.main.temp - 273.15)} °C
                </p>
            </div>
            <div className={s.properties}>
                <p className={s.property}>
                <span className={s.propertyKey}>
                    Clouds
                </span>
                    <span className={s.propertyValue}>
                    {props.clouds.all}
                </span>
                </p>
                <p className={s.property}>
                <span className={s.propertyKey}>
                    Humidity
                </span>
                    <span className={s.propertyValue}>
                    {props.main.humidity}
                </span>
                </p>
                <p className={s.property}>
                <span className={s.propertyKey}>
                    Weather
                </span>
                    <span className={s.propertyValue}>
                    {element1}
                </span>
                </p>
                <p className={s.property}>
                <span className={s.propertyKey}>
                    Feels Like
                </span>
                    <span className={s.propertyValue}>
                    { Math.floor(props.main.feels_like - 273.15)} °C
                </span>
                </p>
                <p className={s.property}>
                <span className={s.propertyKey}>
                    Pressure
                </span>
                    <span className={s.propertyValue}>
                    {props.main.pressure}
                </span>
                </p>
                <p className={s.property}>
                <span className={s.propertyKey}>
                    Temperature min
                </span>
                    <span className={s.propertyValue}>
                    { Math.floor(props.main.temp_min - 273.15)} °C
                </span>
                </p>
                <p className={s.property}>
                <span className={s.propertyKey}>
                    Temperature max
                </span>
                    <span className={s.propertyValue}>
                    { Math.floor(props.main.temp_max - 273.15)} °C
                </span>
                </p>
                <p className={s.property}>
                <span className={s.propertyKey}>
                    Wind
                </span>
                    <span className={s.propertyValue}>
                    {props.wind.speed}{props.wind.deg}{props.wind.gust}
                </span>
                </p>
            </div>
        </div>

    )
}
const Weather1 = (props) => {
    return (<div>
            {props.description}
        </div>

    )
}

export default LongCard