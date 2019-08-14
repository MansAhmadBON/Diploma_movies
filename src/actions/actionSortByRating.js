import {RATING} from '../constants/constReducers'

const actionSortByRating = () => {
    return {
        type: RATING,
        payload: 'rating'
    }
}

export default actionSortByRating