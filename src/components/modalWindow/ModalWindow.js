import React from 'react'

const ModalWindow = props => {
    if(props.dataFilms){
        const dataForModalWindow = props.dataFilms.filter(item => {
            return (item.title === props.targetFilm) ? item : false 
        })
        const data = dataForModalWindow[0]
        if(data){
            const {budget, title, genres, overview, poster, revenue} = data
            return (
                <div>
                    <h2>{title}</h2>
                    <h3>{genres}</h3> 
                    <p>{overview}</p>
                    <div>
                        <span>{revenue}</span>
                        <hr></hr>
                        <span>{budget}</span>
                    </div>
                </div>
            )
        } else {
            return null
        }
    } else {
        return null
    }
}

export default ModalWindow