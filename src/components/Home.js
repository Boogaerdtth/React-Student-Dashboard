import React from 'react'
import HappyMan from './foto.jpg'


const Home = () => {
    return (
        <div className="homepage">
            <h1>Home</h1>
            <p>
                Welkom bij de hoofdpagina van Winc Academy!!
                <br />
                Klik op 1 van de tabs
                om de resultaten en beoordelingen van de studenten te zien!
                <br />
                Klik onderaan de overzicht grafieken voor een beter beeld voor of
                de moeilijkheidsgraad van de opdrachten of de leukheid van de opdrachten
            </p>
            <img src={HappyMan} alt="Happy Man" height="400px" />
        </div>
    )
}

export default Home