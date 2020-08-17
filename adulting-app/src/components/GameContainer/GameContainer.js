import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterSelection from '../CharacterSelection/CharacterSelection'
import Event from '../Event/Event'
import './game-container.css'

const GameContainer = () => {
    const [characters, setCharacters] = useState([])
    const [player, setPlayer] = useState(null)
    const [events, setEvents] = useState([])
    const [dailyEvents, setDailyEvents] = useState([])
    const [dailyEventResult, setDailyEventResult] = useState({ text: '', artwork: '', isComplete: false })
    const [day, setDay] = useState(0)

    useEffect(() => {
        const makeAPICall = async () => {
            try {
                let res = await axios(`http://localhost:3000/characters`)
                setCharacters(res.data)
                res = await axios(`http://localhost:3000/events`)
                setEvents([...res.data])
                setDailyEvents([...res.data])
            } catch (err) {
                console.error(err)
            }
        }
        makeAPICall()
    }, [])

    const chooseCharacter = (id) => {
        const filteredCharacters = characters.filter(element => element.id === id ? element : null)
        const selectedCharacter = filteredCharacters[0]
        setPlayer(selectedCharacter)

    }

    const eventPicker = () => {
        let selectedEvent = dailyEvents[Math.floor(Math.random() * Math.floor(dailyEvents.length - 1))]
        dailyEvents.splice(dailyEvents.indexOf(selectedEvent), 1)
        return selectedEvent
    }

    const eventHandler = (id, option) => {
        let optionTest
        const eventChallenge = events.filter(element => element.id === id ? element : null)[0]
        const eventResults = eventChallenge.event_result
        optionTest = eventChallenge[`option_${option}_test`]
        let testResult = player[optionTest] + Math.floor(Math.random() * 3)
        if (testResult >= eventChallenge.difficulty) {
            setDailyEventResult({ text: eventResults[`${option}_success`], artwork: eventResults[`${option}_success_art`], isComplete: true })
            setPlayer({
                ...player,
                resources: player.resources + eventResults[`${option}_success_score`]
            })
        } else {
            setDailyEventResult({ text: eventResults[`${option}_failure`], artwork: eventResults[`${option}_failure_art`], isComplete: true })
            setPlayer({
                ...player,
                resources: player.resources + eventResults[`${option}_failure_score`]
            })
        }
    }

    console.log(player)
    const continueHandler = () => {
        if (day < 4) {
            setDailyEventResult({ text: '', artwork: '', isComplete: false })
            setDay(day + 1)
        }
    }

    let screen
    if (player === null) {
        screen = <CharacterSelection characters={characters} chooseCharacter={chooseCharacter} />
    } else {
        screen = <Event
            day={day}
            eventPicker={eventPicker}
            eventHandler={eventHandler}
            continueHandler={continueHandler}
            dailyEventResult={dailyEventResult}
        />
    }
    return screen

}

export default GameContainer