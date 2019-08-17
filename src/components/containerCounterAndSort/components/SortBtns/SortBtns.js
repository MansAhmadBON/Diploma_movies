import React from 'react'
import Rating from './components/Rating'
import Release from './components/Release'
import styles from './styles.module.css'

const SortBtns = props => {
    return (
        <div className={styles.container_sort_btns}>
            <span className={styles.descr_cort}>Sort By</span>
            <Rating 
                sortByRating={props.sortByRating}
            />
            <Release 
                sortByRelease={props.sortByRelease}
            />
        </div>
    )
}

export default SortBtns