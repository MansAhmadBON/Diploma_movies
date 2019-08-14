import React from 'react'
import Counter from './components/Counter'
import SortBtns from './components/SortBtns'

const ContainerCounterAndSoet = props => {
    return (
        <div>
            <Counter />
            <SortBtns
                sortByRating={props.sortByRating}
                sortByRelease={props.sortByRelease}
            />
        </div>
    )
}

export default ContainerCounterAndSoet