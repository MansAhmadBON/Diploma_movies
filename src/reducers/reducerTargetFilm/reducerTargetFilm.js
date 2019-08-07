import {TARGET_FILM} from '../../constants/constReducers'

const initialState = {
    target: '123'
}

function reducerTargetFilm(state = initialState, action){
    //console.log(action)
    if(action.type === TARGET_FILM){
        return {
            ...state,
            target: action.payload
        }
    } else {
        return state
    }
} 

export default reducerTargetFilm