import  { FILMS_FETCH_ERROR } from '../constants/constReducers'

const actionFetchError = error => {
    return {
        type: FILMS_FETCH_ERROR,
        payload: error
    }
}

export default actionFetchError