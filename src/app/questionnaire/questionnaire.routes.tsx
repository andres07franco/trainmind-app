import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QuestionScreen } from './screens';

export type QuestionnaireStackParamList = {
  QuestionScreen: { id: string };
};

const Stack = createNativeStackNavigator<QuestionnaireStackParamList>();

export const Routes = [
  <Stack.Screen
    key="QuestionScreen"
    options={{ headerShown: false }}
    name="QuestionScreen"
    component={QuestionScreen}
  />,
];
