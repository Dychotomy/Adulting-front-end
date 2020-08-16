import React from 'react'

const CharacterSelection = (props) => {

    let display = props.characters.map((element, i) => {
        return (
            <div key={element.id}>
                <div>{element.name}</div>
                <img src={element.artwork} alt={element.name} />
                <div>{element.description}</div>
                <button onClick={() => props.chooseCharacter(element.id)}>Pick me</button>
            </div>
        )
    })
    return (
        <>
            <h2>Choose your character</h2>
            {display}
        </>
    )
}

export default CharacterSelection