import { applyMiddleware } from 'redux'
import { fetchDataMiddleware } from './fetchDataMiddleware'

export default applyMiddleware(fetchDataMiddleware)