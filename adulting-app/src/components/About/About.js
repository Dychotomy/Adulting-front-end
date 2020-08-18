import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './about.css'

const About = () => {
    return (
        <div className='about'>
            <Header />
            <div>
                <h2>About the game concept</h2>
                <p>
                    Credits
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About