import {CLOSE} from '../constants/constReducers'

const actionCloseModal = () => {
    return {
        type: CLOSE,
        payload: false
    }
}

export default actionCloseModal