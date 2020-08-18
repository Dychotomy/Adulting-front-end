import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './homepage.css'

const Homepage = () => {

    return (
        <div className='home'>
            <Header />
            <h2 className='home-title'>Instructions</h2>
            <p className='home-text'>Placeholder instructions have screen shots of actual play</p>
            <img className='home-img-1' src='https://res.cloudinary.com/dpn6ltns1/image/upload/v1597766454/Project%204/Events/character_selection_ygjdrv.png' alt='game play' />
            <img className='home-img-2' src='https://res.cloudinary.com/dpn6ltns1/image/upload/v1597766459/Project%204/Events/game_play_l6t5hw.png' alt='game play' />
            <div className='home-button-location'>
                <Link to='/game'>
                    <button className='home-button'>Play</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage