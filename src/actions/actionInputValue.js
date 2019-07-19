import {SET_INPUT_VALUE} from '../constants/constReducers'

const actionInputValue = newValue => {
    return {
        type: SET_INPUT_VALUE,
        payload: newValue
    }
}

export default actionInputValue