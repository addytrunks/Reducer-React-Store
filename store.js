// All the reducers , middlewares and stuff goes here.

import { combineReducers,createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//You wanna put all the reducers here.
const reducer = combineReducers({
    // Pass your reducers over here.
})

//Contains thing you want to fire off once redux loads.
const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store
