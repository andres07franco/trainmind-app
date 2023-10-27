import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InterviewScreen } from './screens';

export type InterViewStackParamList = {
  InterviewScreen: undefined;
};

const Stack = createNativeStackNavigator<InterViewStackParamList>();

export const Routes = [
  <Stack.Screen
    key="InterviewScreen"
    options={{ headerShown: false }}
    name="InterviewScreen"
    component={InterviewScreen}
  />,
];
