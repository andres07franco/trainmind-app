import { combineReducers } from '@reduxjs/toolkit';
import { sessionSlice } from './shared/redux/slices';
import { trainingSlice } from '@training/redux';

const rootReducer = combineReducers({
  session: sessionSlice.reducer,
  training: trainingSlice.reducer,
});

export { rootReducer };
