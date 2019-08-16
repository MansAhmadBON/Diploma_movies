import React from 'react'
import styles from './styles.module.css'

const BtnsSearchBy = props => {
    return (
        <div style={{display: 'inline-block', width: '500px', 'padding-top': '30px'}}>
            <span className={styles.btns_decsr}>SEARCH BY</span>
            <button onClick={props.searchByTitle} className={styles.btns}>TITLE</button>
            <button onClick={props.searchByGanre} className={styles.btns}>GENDER</button>
        </div>
    )
}

export default BtnsSearchBy