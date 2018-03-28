import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import Reducer from './reducers/Reducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
    	Reducer: Reducer
    }),
    composeEnhancers(middleware)
);

export default store;