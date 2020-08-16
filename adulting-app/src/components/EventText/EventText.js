import React from 'react'

const EventText = (props) => {
    const { dailyEvent } = props
    console.log('dailyEvent', props.dailyEvent)
    return (
        <>
            <div>{dailyEvent.description}</div>
            <div>{dailyEvent.option_a}
                <button>A</button>
            </div>
            <div>{dailyEvent.option_b}
                <button>B</button>
            </div>
        </>
    )
}

export default EventText