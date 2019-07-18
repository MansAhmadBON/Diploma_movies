import {SET_INPUT_VALUE} from '../../constants/constReducers'

const initialState = []

function reducerInputValue(state = initialState, action){
    if(action.type === SET_INPUT_VALUE){
        return [
            ...state,
            action.payload
        ]
    } else {
        return state
    }
} 

export default reducerInputValue
