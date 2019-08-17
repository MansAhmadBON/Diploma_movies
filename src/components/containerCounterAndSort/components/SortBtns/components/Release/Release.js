import React from 'react'
import styles from '../Rating/styles.module.css'

const Release = props => {
    return (
        <button className={styles.btn_sort} onClick={props.sortByRelease}>release </button>
    )
}

export default Release