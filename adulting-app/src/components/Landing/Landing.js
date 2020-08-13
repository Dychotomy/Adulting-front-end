import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

const Landing = () => {
    return (
        <>
            <div className='landing-page'>Adulting
            <Link to='/home'>
                    <button type='button' className='landing-button'>Enter</button>
                </Link>
            </div>
        </>
    )
}

export default Landing