import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'react-thunk'
import authReducer from "../reducers/authReducer"
const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('react-logger')

    middlewares.push(logger)
}

const store = createStore(
    combineReducers( {
        auth: authReducer,
        applyMiddleware(
            ...middlewares
        )
    })
)

export default store;