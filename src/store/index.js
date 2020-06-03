import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initState = {};

export default createStore(reducer, initState, applyMiddleware(thunk));
