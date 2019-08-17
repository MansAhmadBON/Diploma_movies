import {combineReducers} from 'redux'
import inputValue from './reducerInputValue'
import dataFilms from './reducerFetchMovies'
import error from './reducerFetchError'
import searchFilmsBy from './reducerSearchBy'
import targetFilm from './reducerTargetFilm'
import sortBy from './reducerSortBy'
import openModal from './reducerOpenModal'

export default combineReducers({
    inputValue,
    searchFilmsBy,
    dataFilms,
    error,
    targetFilm,
    sortBy,
    openModal
})
