import React from 'react'
import './character-selection.css'

const CharacterSelection = (props) => {

    let display = props.characters.map((element, i) => {
        return (
            <div key={element.id} className='character'>
                <div className='character-name'>{element.name}</div>
                <img className='character-img' src={element.artwork} alt={element.name} />
                <div className='character-desc'>{element.description}</div>
                <button className='character-button' onClick={() => props.chooseCharacter(element.id)}>Pick me</button>
            </div>
        )
    })
    return (
        <div className='character-container'>
            <h2 className='character-title'>Choose your character</h2>
            {display}
        </div>
    )
}

export default CharacterSelection