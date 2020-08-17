import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './homepage.css'

const Homepage = () => {
    // const fullscreen = document.querySelector('#gameContainer')

    // fullscreen.requestFullscreen()
    //     .then(function () {
    //         // element has entered fullscreen mode successfully
    //     })
    //     .catch(function (error) {
    //         // element could not enter fullscreen mode
    //         // error message
    //         console.log(error.message);
    //     })

    return (
        <div className='home'>
            <Header />
            <h2>Instructions</h2>
            <p>Placeholder instructions have screen shots of actual play</p>
            <Link to='/game'>
                <button className='home-button' >Play</button>
            </Link>
            <Footer />
        </div>
    )
}

export default Homepage