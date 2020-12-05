import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {getCards, updateCard, deleteCard, addCard} from '../../Redux/ReducerCards'
import ShortCards from './ShortCards'
import Keys from './Keys'
import styles from './Find.module.css'

const CityForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <Field
                    type='text'
                    component={(props) => < input {...props.input} placeholder='Enter city name'/>}
                    name="name"
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AllReduxForm = reduxForm({form: 'cards'})(CityForm)

const Finder = (props) => {
    let shortcards = Object
        .values(props.cities)
        .map(c => <ShortCards
            getCards={props.getCards}
            addCard={props.addCard}
            key={c.id}
            name={c.name}
            main={c.main}
            weather={c.weather}
            clouds={c.clouds}
            wind={c.wind}
            id={c.id}
        />)

    let shortcards2 = Object
        .values(props.citiesSaved)
        .map(c => <Keys
            updateCard={props.updateCard}
            deleteCard={props.deleteCard}
            key={c.id}
            name={c.name}
            main={c.main}
            weather={c.weather}
            clouds={c.clouds}
            wind={c.wind}
            id={c.id}
        />)

    const onSubmit = (FormData) => {
        props.getCards(FormData.name)
    }
    return (
        <div className={styles.find}>
            <AllReduxForm onSubmit={onSubmit}/>
            {shortcards.length ? <h3>Current weather</h3> : ''}
            <div className={styles.cardsList}>
                {shortcards}
            </div>
            {shortcards2.length ? <h3>Saved cities</h3> : ''}
            <div className={styles.cardsList}>
                {shortcards2}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    cities: state.cardspage.cities,
    citiesSaved: state.cardspage.citiesSaved
})

export default connect(mapStateToProps, {getCards, updateCard, deleteCard, addCard})(Finder)
