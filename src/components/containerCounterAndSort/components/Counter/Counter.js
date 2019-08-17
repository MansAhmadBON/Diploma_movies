import React from 'react'
import styles from './styles.module.css'

const Counter = props => {
    return (
        <div className={styles.container_counter}>
            <div>
                 {props.data} movies found
            </div>
        </div>
    )
}

export default Counter