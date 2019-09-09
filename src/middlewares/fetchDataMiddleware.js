import {FILMS_GET_DATA} from '../constants/constReducers';
import actionFetchSuccess from '../actions/actionMoviesFetchSuccess';
import actionFetchError from '../actions/actionMoviesFetchError';

export const fetchDataMiddleware = state => next => async action => {
    if(action.type === FILMS_GET_DATA){
        try {
            const a = await fetch(
              `https://reactjs-cdp.herokuapp.com/movies`
            )
            const result = await a.json();
            state.dispatch(actionFetchSuccess(result));
        } catch(error) {
            state.dispatch(actionFetchError(error));
        }
    } else {
        return next(action);
    }
}