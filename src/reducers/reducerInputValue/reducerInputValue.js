import {SET_INPUT_VALUE} from '../../constants/constReducers'

const initialState = {
    value: ''
}

function reducerInputValue(state = initialState, action){
    console.log(action)
    if(action.type === SET_INPUT_VALUE){
        return {
            ...state,
            value: action.payload
        }
    } else {
        return state
    }
} 

export default reducerInputValue
