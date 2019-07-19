import { createStore } from "redux";
import  rootReducer  from '../reducers'
import middlewares from '../middlewares/applyMiddleware'

const store = createStore(rootReducer, middlewares)

export default store