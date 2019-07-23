import {combineReducers} from 'redux'
import inputValue from './reducerInputValue'
import dataFilms from './reducerFetchMovies'
import error from './reducerFetchError'
import searchFilmsBy from './reducerSearchBy'

export default combineReducers({
    inputValue,
    searchFilmsBy,
    dataFilms,
    error
})