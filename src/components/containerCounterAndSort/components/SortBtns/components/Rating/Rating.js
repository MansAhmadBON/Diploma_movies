import React from 'react'
import styles from './styles.module.css'

const Rating = props => {
    return (
        <button className={styles.btn_sort} onClick={props.sortByRating}>rating</button>
    )
}

export default Rating