import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducers';

const rootReducer = combineReducers({
  login: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
