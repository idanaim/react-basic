import reducer from './root'
import {applyMiddleware, createStore} from 'redux';
import logMiddleware from "./middleware/log";


const store = createStore(reducer, applyMiddleware(
    logMiddleware
));

window.store = store;

export default store;