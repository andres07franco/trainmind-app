import React, { useState } from 'react';
import * as yup from 'yup';
import { BasicLayout } from '@ui-components/templates';
import {
  ActionButton,
  AvatarImage,
  AvatarSizes,
  FieldInput,
  TrainingCarousel,
  TrainingItem,
  Typography,
} from '@shared/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AsnwerContent, AvatarContainer, Container, QuestionContent } from './question.style';

const trainings: TrainingItem[] = [
  {
    id: '1',
    icon: 'usa',
    title: 'English',
    selected: false,
  },
  {
    id: '2',
    icon: 'pc-code',
    title: 'Software Development',
    selected: false,
  },
  {
    id: '3',
    icon: 'e-commerce',
    title: 'CMX Exam',
    selected: false,
  },
];

const schema = yup.object().shape({
  name: yup.string().required('Email is required'),
});

const QuestionScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = useState(trainings);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <BasicLayout title="Node JS Senior" options={{ showNavBar: true }}>
      <Container>
        <AvatarContainer>
          <AvatarImage name="sakura" size={AvatarSizes.large} />
        </AvatarContainer>
        <QuestionContent>
          <Typography type="Subtitle2" color="neutral90">
            What is Node js?
          </Typography>
          <AsnwerContent>
            <Typography type="Subtitle2" color="neutral90">
              - Javascript engine
            </Typography>
            <Typography type="Subtitle2" color="neutral90">
              - Javascript Framwwork
            </Typography>
            <Typography type="Subtitle2" color="neutral90">
              - Javascript Library
            </Typography>
            <Typography type="Subtitle2" color="neutral90">
              - Javascript Bundle
            </Typography>
          </AsnwerContent>
        </QuestionContent>
        <ActionButton
          title={'Next'}
          onPress={() => {
            navigation.navigate('SelectTrainingScreen');
          }}
          type="primary"
        />
      </Container>
    </BasicLayout>
  );
};

export { QuestionScreen };
