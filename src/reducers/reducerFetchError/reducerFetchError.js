import {FETCH_ERROR} from '../../constants/constReducers'

const initialState = ''

function reducerFetchError(state=initialState, action){
    if(action.type === FETCH_ERROR){
        return {
            ...state,
            error: action.payload
        }
    } else {
        return state
    }
}

export default reducerFetchError