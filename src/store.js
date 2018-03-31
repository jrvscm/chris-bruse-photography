import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import SliderReducer from './reducers/SliderReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
    	SliderState: SliderReducer
    }),
    composeEnhancers(middleware)
);

export default store;