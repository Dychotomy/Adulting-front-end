import React, { useState, useEffect } from 'react'
import EventArt from '../EventArt/EventArt'
import EventText from '../EventText/EventText'

const Event = (props) => {
    const { eventPicker, eventHandler } = props
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    let dayTitle = days[props.day]

    const dailyEvent = eventPicker()

    return (
        <>
            <h2>{dayTitle}</h2>
            <EventArt artwork={dailyEvent.artwork} />
            <EventText dailyEvent={dailyEvent} eventHandler={eventHandler} />
        </>
    )

}

export default Event