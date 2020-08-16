import React from 'react'

const EventText = (props) => {
    const { dailyEvent, eventHandler } = props
    console.log('dailyEvent', props.dailyEvent)
    return (
        <>
            <div>{dailyEvent.description}</div>
            <div>{dailyEvent.option_a}
                <button onClick={eventHandler}>A</button>
            </div>
            <div>{dailyEvent.option_b}
                <button onClick={eventHandler}>B</button>
            </div>
        </>
    )
}

export default EventText