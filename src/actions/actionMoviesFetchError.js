import  { FETCH_ERROR } from '../constants/constReducers'

const actionFetchError = error => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export default actionFetchError