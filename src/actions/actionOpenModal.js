import {OPEN} from '../constants/constReducers'

const actionOpenModal = () => {
    return {
        type: OPEN,
        payload: true
    }
}

export default actionOpenModal