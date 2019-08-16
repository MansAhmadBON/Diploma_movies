import React from 'react'
import styles from '../BtnsSearchBy/styles.module.css'

const BtnSearch = props => {
    return (
        <button onClick={props.getMovis} className={styles.btns}>SEARCH</button>
    )
}

export default BtnSearch