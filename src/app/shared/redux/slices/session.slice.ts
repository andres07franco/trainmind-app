import { User } from '@core/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SessionState {
  sessionStarted: boolean;
  user: User;
}

const intialState: SessionState = {
  sessionStarted: false,
  user: {
    id:'',
    email: '',
    name: '',
    phone: '',
    deviceId:'',
    trainings: [],
  },
};

const sessionSlice = createSlice({
  name: 'session',
  initialState: intialState,
  reducers: {
    signIn: (state, { payload }: PayloadAction<User>) => {
      return {
        ...state,
        sessionStarted: true,
        user: payload,
      };
    },
    logOut: (state) => {
      return {
        ...state,
        ...intialState,
      };
    },
  },
});

export const { signIn, logOut } = sessionSlice.actions;

export { sessionSlice };
