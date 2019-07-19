import {FETCH_SUCCESS} from '../constants/constReducers'

const actionFetchSuccess = data => {
    return {
        type: FETCH_SUCCESS,
        actions: data
    }
}

export default actionFetchSuccess

