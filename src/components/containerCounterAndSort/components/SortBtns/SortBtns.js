import React from 'react'
import Rating from './components/Rating'
import Release from './components/Release'

const SortBtns = props => {
    return (
        <div>
            Sort By
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