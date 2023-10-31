import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLoadSessionEffect } from '@authentication/hooks';
import { InterViewStackParamList, Routes as InterviewRoutes } from '@interview';
import { WelcomeStackParamList, Routes as OnboardingRoutes } from '@onboarding';

export type RootStackParamList = WelcomeStackParamList &
  InterViewStackParamList;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  useLoadSessionEffect();
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      {OnboardingRoutes}
      {InterviewRoutes}
    </Stack.Navigator>
  );
}
