import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import * as actionCreators from './actionCreators'
import * as constants from './constants'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store
export { actionCreators, constants }