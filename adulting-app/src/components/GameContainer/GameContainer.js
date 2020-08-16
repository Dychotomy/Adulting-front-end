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
    const [day, setDay] = useState(0)

    useEffect(() => {
        const makeAPICall = async () => {
            try {
                let res = await axios(`http://localhost:3000/characters`)
                setCharacters(res.data)
                res = await axios(`http://localhost:3000/events`)
                setEvents(res.data)
                setDailyEvents(res.data)
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

    // if (events) {
    //     let dailyEvents = events    
    // }

    const eventPicker = () => {
        let selectedEvent = dailyEvents[Math.floor(Math.random() * Math.floor(dailyEvents.length - 1))]
        dailyEvents.splice(dailyEvents.indexOf(selectedEvent), 1)
        return selectedEvent
    }
    let screen
    if (player === null) {
        screen = <CharacterSelection characters={characters} chooseCharacter={chooseCharacter} />
    } else {
        screen = <Event day={day} eventPicker={eventPicker} />
    }
    return screen

}

export default GameContainer