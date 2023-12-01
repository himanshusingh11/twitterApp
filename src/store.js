import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tweetReducer from './reducers/tweetReducer';

const store = createStore(tweetReducer, applyMiddleware(thunk));

export default store;
