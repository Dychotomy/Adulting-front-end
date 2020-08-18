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