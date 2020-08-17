import React from 'react'

const EventText = (props) => {
    const { dailyEvent, eventHandler, continueHandler, dailyEventResult } = props
    console.log('dailyEvent', props.dailyEvent)

    let display = dailyEventResult.isComplete ?
        <>
            <div>{dailyEventResult.text}</div>
            <button onClick={continueHandler}>Continue</button>
        </>
        :
        (<>
            <div>{dailyEvent.description}</div>
            <div>{dailyEvent.option_a}
                <button onClick={() => eventHandler(dailyEvent.id, 'a')}>A</button>
            </div>
            <div>{dailyEvent.option_b}
                <button onClick={() => eventHandler(dailyEvent.id, 'b')}>B</button>
            </div>
        </>)

    return (
        <>
            {display}
        </>
    )
}

export default EventText