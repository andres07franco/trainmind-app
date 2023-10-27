import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLoadSessionEffect } from '@authentication/hooks';
import { MovieStakParamList, Routes as MovieRoutes } from '@movies';
import { InterViewStackParamList, Routes as InterviewRoutes } from '@interview';

export type RootStackParamList = MovieStakParamList & InterViewStackParamList;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  useLoadSessionEffect();
  return (
    <Stack.Navigator initialRouteName="InterviewScreen">
      {MovieRoutes}
      {InterviewRoutes}
    </Stack.Navigator>
  );
}
