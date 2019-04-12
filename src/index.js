import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


const whiteReducer = (state = 0, action) => {
    switch (action.type) {
        case 'WHITE':
            state--;
            return state;
        case 'BLACK':
            state++;
            return state;
        default:
            return state;
    }
}
const storeInstance = createStore(
    combineReducers({
        whiteReducer,
    }),
    // Add sagaMiddleware to our store
    // applyMiddleware(sagaMiddleware, logger),
);
// const mapDispatchToProps = {}

// Provider allows us to use redux within our react app


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
