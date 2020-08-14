import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './homepage.css'

const Homepage = () => {
    return (
        <div className='home'>
            <Header />
            <h2>Instructions</h2>
            <p>Placeholder instructions have screen shots of actual play</p>
            <button className='home-button' >Play</button>
            <Footer />
        </div>
    )
}

export default Homepage