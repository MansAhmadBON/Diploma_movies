import React from 'react'
import styles from './styles.module.css'

const Ganre = props => {
    if(props.genres){
        return props.genres.map((item, i) => {
            return <h3 key={i} className={styles.modal_genres}> {item}</h3>
        })
    } else {
        return null
    }
}

export default Ganre