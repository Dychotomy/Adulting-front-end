import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './about.css'

const About = () => {
    return (
        <div className='about'>
            <Header />
            <div>
                <h2 className='about-title'>About</h2>
                <p className='about-text'>
                    Adulting is a game inspired by the likes of the Telltale game “Wolf Among Us” and the game “Yawgh”. Admittedly, a much, much, simpler game in scale and complexity. While many of the experiences Jack and Jill have to deal with are drawn from real life, please take everything in this game with a grain salt. Also cats hate water, please don’t abuse your cat.
                </p>
                <h3 className='about-credit'>Credits</h3>
                <ul className='about-list'>
                    <li>Vishnu Nair</li>
                    <li>Milada Vigerova</li>
                    <li>Ryan Chia</li>
                    <li>Ian Stauffer</li>
                    <li>Eiliv-Sonas Aceron</li>
                    <li>Maria Lin Kim</li>
                    <li>Enrico Mantegazz</li>
                    <li>Paolo Nicolello</li>
                    <li>Joshua Coleman</li>
                    <li>Megan Markham</li>
                    <li>Anastasiia Ostapovych</li>
                    <li>Sharon McCutcheo</li>
                    <li>Uliana Kopanytsia</li>
                    <li>Bianca Jordan</li>
                    <li>Shanna Camilleri</li>
                    <li>Jason Leung</li>
                    <li>Toine G</li>
                    <li>Martha Dominquez</li>
                    <li>Brittany Colette</li>
                    <li>Bill Oxford</li>
                    <li>Luis Villasmil</li>
                    <li>Matt Popovich</li>
                    <li>Scott Graham</li>
                    <li>Christa Dodoo</li>
                    <li>Wesley Tingey</li>
                    <li>Nathan Dumlao</li>
                    <li>Kazuky Akayashi</li>
                    <li>Alex Chernenko</li>
                    <li>Cassandra Hamer</li>
                    <li>Daoud Abismail</li>
                    <li>Denis Harschi</li>
                    <li>Jasmin Chew</li>
                    <li>Kenan Reed</li>

                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default About