import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { InterViewStackParamList, Routes as InterviewRoutes } from '@interview';
import { WelcomeStackParamList, Routes as OnboardingRoutes } from '@onboarding';
import { TrainingStackParamList, Routes as TrainingRoutes } from '@training';
import {
  QuestionnaireStackParamList,
  Routes as QuestionnaireRoutes,
} from '@questionnaire';

export type RootStackParamList = WelcomeStackParamList &
  InterViewStackParamList &
  TrainingStackParamList &
  QuestionnaireStackParamList;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        animation: 'slide_from_right', //<-- this is what will do the trick
        presentation: 'card',
      }}
    >
      {OnboardingRoutes}
      {TrainingRoutes}
  
      {QuestionnaireRoutes}
    </Stack.Navigator>
  );
}
