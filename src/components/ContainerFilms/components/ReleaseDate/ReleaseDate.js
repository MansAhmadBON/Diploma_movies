import React from 'react'
import styles from './styles.module.css'

const ReleaseDate = props => {
    const release = parseInt(props.date)
    return (
        <span className={styles.release_date}>{release}</span>
    )
}

export default ReleaseDate