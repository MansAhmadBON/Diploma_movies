import {FETCH_SUCCESS} from '../../constants/constReducers'; 

const initialState = {
    data: []
}

function reducerFetchMovies (state = initialState, action){
    if(action.type === FETCH_SUCCESS){
        return {
            ...state,
            data: action.payload
        }
    } else {
        return state
    }
}

export default reducerFetchMovies