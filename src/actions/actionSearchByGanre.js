import {SEARCH_BY_GANRE} from '../constants/constReducers'

const actionSearchBy = () => {
    return {
        type: SEARCH_BY_GANRE,
        payload: 'ganre'
    }
}

export default actionSearchBy