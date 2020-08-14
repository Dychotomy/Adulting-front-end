import React from 'react'
import Nav from '../Nav/Nav'
import './header.css'

const Header = () => {
    return (
        <>
            <h1 className='header'>
                <Nav />
            </h1>
        </>
    )
}

export default Header