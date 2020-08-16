import React from 'react'

const EventArt = (props) => {
    console.log('Art', props.artwork)
    return (
        <img src={props.artwork} alt='event' />
    )

}

export default EventArt