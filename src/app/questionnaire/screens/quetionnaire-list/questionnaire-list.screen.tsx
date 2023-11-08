import React, { useState } from 'react';
import * as yup from 'yup';
import { ActivityListLayout } from '@ui-components/templates';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ActivityList, Typography } from '@shared/components';

const questionaries = [
  {
    id: '1',
    icon: 'task',
    title: 'NodeJS Junior',
    questions: 20,
    progress: 50,
  },
  {
    id: '2',
    icon: 'task',
    title: 'Nestjs Senior',
    questions: 20,
    progress: 50,
  },
  {
    id: '3',
    icon: 'task',
    title: 'ReactJs Senior',
    questions: 20,
    progress: 50,
  },
];

const schema = yup.object().shape({
  name: yup.string().required('Email is required'),
});

const QuestionnaireListScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = useState(questionaries);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <ActivityListLayout
      title="Questionnaire"
      icon="questionnaire"
      subtitle="20 Lessons"
    >
      <ActivityList
        data={questionaries}
        onSelect={() => navigation.navigate('QuestionScreen')}
      />
    </ActivityListLayout>
  );
};

export { QuestionnaireListScreen };
