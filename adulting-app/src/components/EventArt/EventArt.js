import React from 'react'
import './event-art.css'

const EventArt = (props) => {
    const { dailyEventResult, dailyEvent } = props

    let display = dailyEventResult.isComplete ?
        <img className='event-art' src={dailyEventResult.artwork} alt='event' />
        :
        <img className='event-art' src={dailyEvent.artwork} alt='event' />

    return (
        // <img src={props.artwork} alt='event' />
        <div>{display}</div>
    )

}

export default EventArt