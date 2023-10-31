import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from './screens';

export type WelcomeStackParamList = {
  WelcomeScreen: undefined;
};

const Stack = createNativeStackNavigator<WelcomeStackParamList>();

export const Routes = [
  <Stack.Screen
    key="WelcomeScreen"
    options={{ headerShown: false }}
    name="WelcomeScreen"
    component={WelcomeScreen}
  />,
];
