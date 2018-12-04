import reducer from './root'
import {applyMiddleware, createStore} from 'redux';
import logMiddleware from "./middleware/log";
import apiMiddleware from "./middleware/api";


const store = createStore(reducer, applyMiddleware(
    logMiddleware,
    apiMiddleware
));

window.store = store;

export default store;