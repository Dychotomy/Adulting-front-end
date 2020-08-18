import React from 'react'
import { Link } from 'react-router-dom'
import './end-scene.css'

const EndScene = (props) => {
    const { player } = props
    console.log(player.resources)

    let screen
    if (player.resources > 40) {
        screen =
            <div>
                <img className='end-img' src='https://res.cloudinary.com/dpn6ltns1/image/upload/v1597770425/Project%204/Events/endscene-win_fgybfm.jpg' alt='end credit' />
                <p className='end-desc'>You made it!</p>

            </div>
    } else if (player.resources > 30) {
        screen =
            <div>
                <img className='end-img' src='https://res.cloudinary.com/dpn6ltns1/image/upload/v1597772381/Project%204/Events/endscene_concert_sanwbf.jpg' alt='end credit' />
                <p className='end-desc'>You made it!</p>

            </div>
    } else if (player.resources > 20) {
        screen =
            <div>
                <img className='end-img' src='https://res.cloudinary.com/dpn6ltns1/image/upload/v1597772377/Project%204/Events/endscene_fluffy_efxhtk.jpg' alt='end credit' />
                <p className='end-desc'>You made it!</p>

            </div>
    } else {
        screen =
            <div>
                <img className='end-img' src='https://res.cloudinary.com/dpn6ltns1/image/upload/v1597770422/Project%204/Events/endscene-loss_npf0ty.jpg' alt='end credit' />
                <p className='end-desc'>You made it!</p>

            </div>
    }

    return (
        <>
            <h1 className='end-title'>The Weekend!</h1>
            <div>{screen}</div>
            <Link to='/home'><button className='end-button'>Home</button></Link>
        </>
    )
}

export default EndScene