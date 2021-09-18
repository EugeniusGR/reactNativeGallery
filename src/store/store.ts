import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import imageReducer from './reducers/reducers';

const rootReducer = combineReducers({imageReducer});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export default Store;
