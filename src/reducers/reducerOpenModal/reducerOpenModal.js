import {OPEN, CLOSE} from '../../constants/constReducers'


const initialState = {
    isOpen: false
}

function reducerOpenModal(state=initialState, action){
    if(action.type === OPEN){
        return {
            ...state,
            isOpen: action.payload
        }
    } else if(action.type === CLOSE){
        return {
            ...state,
            isOpen: action.payload
        }
    } else {
        return state
    }
}

export default reducerOpenModal