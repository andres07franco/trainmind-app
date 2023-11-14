import { Topic } from '@core/trainings';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrainingProps, ActivityProps } from '@shared/components';

export type TrainingState = {
  selectedTraining: TrainingProps | null;
  selectedActivity: ActivityProps | null;
  selectedTopic: Topic | null;
};

const intialState: TrainingState = {
  selectedTraining: null,
  selectedActivity: null,
  selectedTopic: null,
};

const trainingSlice = createSlice({
  name: 'training',
  initialState: intialState,
  reducers: {
    chooseTraining: (state, { payload }: PayloadAction<TrainingProps>) => {
      return {
        ...state,
        selectedTraining: payload,
      };
    },
    chooseActivity: (state, { payload }: PayloadAction<ActivityProps>) => {
      return {
        ...state,
        selectedActivity: payload,
      };
    },
    selectedTopic: (state, { payload }: PayloadAction<Topic>) => {
      return {
        ...state,
        selectedTopic: payload,
      };
    },
  },
});

export const { chooseTraining, chooseActivity, selectedTopic } =
  trainingSlice.actions;

export { trainingSlice };
