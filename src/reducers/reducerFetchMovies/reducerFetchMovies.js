import {FILMS_FETCH_SUCCESS} from '../../constants/constReducers'; 

const initialState = []

function reducerFetchMovies (state = initialState, action){
    if(action.type === FILMS_FETCH_SUCCESS){
        return action.payload
    } else {
        return state
    }
}

export default reducerFetchMovies