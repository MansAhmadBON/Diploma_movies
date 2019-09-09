import {FILMS_FETCH_SUCCESS} from '../constants/constReducers'

const actionFetchSuccess = data => {
    return {
        type: FILMS_FETCH_SUCCESS,
        payload: data
    }
}

export default actionFetchSuccess

