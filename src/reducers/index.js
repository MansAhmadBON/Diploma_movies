import {combineReducers} from 'redux'
import inputValue from './reducerInputValue'
import dataFilms from './reducerFetchMovies'
import error from './reducerFetchError'

export default combineReducers({
    inputValue,
    dataFilms,
    error
})