import {SEARCH_BY_TITLE} from '../constants/constReducers'

const actionSearchByTitle = () => {
    return {
        type: SEARCH_BY_TITLE,
        payload: 'title'
    }
}

export default actionSearchByTitle