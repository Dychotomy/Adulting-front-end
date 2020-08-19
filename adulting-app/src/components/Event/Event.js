import React, { useState, useEffect } from 'react'
import EventArt from '../EventArt/EventArt'
import EventText from '../EventText/EventText'
import './event.css'

const Event = (props) => {
    const { eventPicker, eventHandler, continueHandler, dailyEventResult } = props
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    let dayTitle = days[props.day]

    const dailyEvent = eventPicker()

    return (
        <div className='event-container'>
            <h2 className='event-day'>{dayTitle}</h2>
            <EventArt dailyEvent={dailyEvent} dailyEventResult={dailyEventResult} />
            <EventText
                dailyEvent={dailyEvent}
                eventHandler={eventHandler}
                continueHandler={continueHandler}
                dailyEventResult={dailyEventResult}
            />
        </div>
    )

}

export default Event