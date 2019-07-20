import {FETCH_SUCCESS} from '../constants/constReducers'

const actionFetchSuccess = data => {
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}

export default actionFetchSuccess

