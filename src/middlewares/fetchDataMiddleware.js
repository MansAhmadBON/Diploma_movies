import {SET_INPUT_VALUE} from '../constants/constReducers';
import actionFetchSuccess from '../actions/actionMoviesFetchSuccess';
import actionFetchError from '../actions/actionMoviesFetchError';

export const fetchDataMiddleware = state => next => async action => {
    console.log(action)
    if(action.type === SET_INPUT_VALUE){
        try {
            const a = await fetch(`reactjs-cdp.herokuapp.com/movies`);
            const resultFetch = await a.json();
            state.dispatch(actionFetchSuccess(resultFetch));
        } catch(error) {
        
            state.dispatch(actionFetchError(error));
        }
    } else {
        return next(action);
    }
}