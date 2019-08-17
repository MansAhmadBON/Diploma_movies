import React from 'react'
import Counter from './components/Counter'
import SortBtns from './components/SortBtns'
import styles from './styles.module.css'


const ContainerCounterAndSoet = props => {
    return (
        <div className={styles.top_bar}>
            <Counter data={props.dataForCounter}/>
            <SortBtns
                sortByRating={props.sortByRating}
                sortByRelease={props.sortByRelease}
            />
        </div>
    )
}

export default ContainerCounterAndSoet