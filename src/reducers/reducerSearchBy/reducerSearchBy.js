import {SEARCH_BY_GANRE, SEARCH_BY_TITLE} from '../../constants/constReducers'

const initialState = {
    searchBy: 'title'
}

const reducerSearchBy = (state = initialState, action) =>{
    switch(action.type){
        case SEARCH_BY_GANRE: 
            return {
                ...state,
                searchBy: action.payload
            }
        case SEARCH_BY_TITLE: 
            return {
                ...state,
                searchBy: action.payload
            }
        default: 
            return state;
    }
}

export default reducerSearchBy