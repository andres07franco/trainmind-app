import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QuestionScreen, QuestionnaireListScreen } from './screens';

export type QuestionnaireStackParamList = {
  QuestionnaireListScreen: undefined;
  QuestionScreen: undefined;
};

const Stack = createNativeStackNavigator<QuestionnaireStackParamList>();

export const Routes = [
  <Stack.Screen
    key="QuestionnaireListScreen"
    options={{ headerShown: false }}
    name="QuestionnaireListScreen"
    component={QuestionnaireListScreen}
  />,
  <Stack.Screen
    key="QuestionScreen"
    options={{ headerShown: false }}
    name="QuestionScreen"
    component={QuestionScreen}
  />,
];
