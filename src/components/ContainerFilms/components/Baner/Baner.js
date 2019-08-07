import React from 'react'

const Baner = props => {
    
    const targetMovie = e => {
        //console.log('targetFilm', props.targetFilm)
        props.targetFilm(e.target.alt)
    }

    return (
        <>
            <img src={props.src} alt={props.alt} onClick={targetMovie}></img>
        </>
    )
} 

export default Baner