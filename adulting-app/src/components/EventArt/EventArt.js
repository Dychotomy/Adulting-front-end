import React from 'react'

const EventArt = (props) => {
    const { dailyEventResult, dailyEvent } = props

    let display = dailyEventResult.isComplete ?
        <img src={dailyEventResult.artwork} alt='event' />
        :
        <img src={dailyEvent.artwork} alt='event' />

    return (
        // <img src={props.artwork} alt='event' />
        <div>{display}</div>
    )

}

export default EventArt