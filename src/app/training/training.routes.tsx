import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SelectActivityScreen,
  SelectTrainingScreen,
  TopicListScreen,
} from './screens';

export type TrainingStackParamList = {
  SelectTrainingScreen: undefined;
  SelectActivityScreen: undefined;
  TopicListScreen: undefined;
};

const Stack = createNativeStackNavigator<TrainingStackParamList>();

export const Routes = [
  <Stack.Screen
    key="SelectTrainingScreen"
    options={{ headerShown: false }}
    name="SelectTrainingScreen"
    component={SelectTrainingScreen}
  />,
  <Stack.Screen
    key="SelectActivityScreen"
    options={{ headerShown: false }}
    name="SelectActivityScreen"
    component={SelectActivityScreen}
  />,
  <Stack.Screen
    key="TopicListScreen"
    options={{ headerShown: false }}
    name="TopicListScreen"
    component={TopicListScreen}
  />,
];
