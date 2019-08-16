import React from 'react'

const ModalWindow = props => {
    if(props.data){
        const {budget, title, genres, overview, poster_path, revenue} = props.data
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
}

export default ModalWindow