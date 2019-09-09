import {FILMS_FETCH_ERROR} from '../../constants/constReducers'

const initialState = ''

function reducerFetchError(state=initialState, action){
    if(action.type === FILMS_FETCH_ERROR){
        return {
            ...state,
            error: action.payload
        }
    } else {
        return state
    }
}

export default reducerFetchError