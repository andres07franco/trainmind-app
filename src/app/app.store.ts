import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import { rootReducer } from './root.reducer';

const middlewares = [thunk];

const store = configureStore({ reducer: rootReducer, middleware: middlewares });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
