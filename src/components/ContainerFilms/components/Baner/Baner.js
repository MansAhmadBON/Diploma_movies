import React from 'react'
import styles from './styles.module.css'

const Baner = props => {
    
    const targetMovie = e => {
        props.targetFilm(e.target.alt)
    }

    return (
        <>
            <img className={styles.img_baner} src={props.src} alt={props.alt} onClick={targetMovie}></img>
        </>
    )
} 

export default Baner