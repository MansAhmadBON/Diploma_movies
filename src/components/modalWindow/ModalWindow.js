import React from 'react'

const ModalWindow = props => {
    const dataTarget = props.dataFilms.filter(item => {
        return (item.title === props.targetFilm) ? item : null
    })

    console.log(dataTarget) 
    
    return (
        <div>
            <h2>Tittle</h2>
            <h3>Genre</h3>
            <p>Descr</p>
            <div>
                <span>price 1</span>
                <span>price 1</span>
            </div>
        </div>
    )
}

export default ModalWindow