import React, { useState, useEffect } from 'react'
import EventArt from '../EventArt/EventArt'
import EventText from '../EventText/EventText'

const Event = (props) => {
    const { eventPicker } = props
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    let dayTitle = days[props.day]

    const dailyEvent = eventPicker()


    console.log('dailyEvent', dailyEvent)
    return (
        <>
            <h2>{dayTitle}</h2>
            <EventArt artwork={dailyEvent.artwork} />
            <EventText dailyEvent={dailyEvent} />
        </>
    )

}

export default Event