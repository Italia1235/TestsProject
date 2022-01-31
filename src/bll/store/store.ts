import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from '../reducers/appReducers';
import { authReducer } from '../reducers/authReducers';
import { contactsReducer } from '../reducers/contactsReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  app: appReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
});

export type AppStoreType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
