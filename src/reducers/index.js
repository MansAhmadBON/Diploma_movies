import {combineReducers} from 'redux'
import inputValue from './reducerInputValue'
import data from './reducerFetchMovies'
import error from './reducerFetchError'

export default combineReducers({
    inputValue,
    data,
    error
})

// const rootReducer = combineReducers({
//     reducerInputValue
// })

// export default rootReducer