import React from 'react'
import './event-text.css'

const EventText = (props) => {
    const { dailyEvent, eventHandler, continueHandler, dailyEventResult } = props

    let display = dailyEventResult.isComplete ?
        <div className='event-text-container'>
            <div clasName='event-text-desc'>{dailyEventResult.text}</div>
            <button className='event-text-button' onClick={continueHandler}>Continue</button>
        </div>
        :
        (<div className='event-text-container'>
            <div className='event-text-desc'>{dailyEvent.description}</div>
            <div className='event-text-option-container'>
                <div className='event-text-option'>
                    {dailyEvent.option_a}
                    <button className='event-text-button' onClick={() => eventHandler(dailyEvent.id, 'a')}>A</button>
                </div>
                <div className='event-text-option'>
                    {dailyEvent.option_b}
                    <button className='event-text-button' onClick={() => eventHandler(dailyEvent.id, 'b')}>B</button>
                </div>
            </div>
        </div>)

    return (
        <>
            {display}
        </>
    )
}

export default EventText