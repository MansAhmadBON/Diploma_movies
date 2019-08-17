import React from 'react'
import styles from './styles.module.css'

const Ganre = props => {
    return props.ganre.map((item, i) => {
        return (
            <div className={styles.item_ganre} key={i}>
                <span>{item}</span>
            </div>
        )
    })
}

export default Ganre