import {RATING, RELEASE} from '../../constants/constReducers'

const initialState = {
    sortBy: null
}

const reducerSortBy = (state = initialState, action) =>{
    switch(action.type){
        case RATING: 
            return {
                ...state,
                sortBy: action.payload
            }
        case RELEASE: 
            return {
                ...state,
                sortBy: action.payload
            }
        default: 
            return state;
    }
}

export default reducerSortBy