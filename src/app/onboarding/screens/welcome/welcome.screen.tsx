import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
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
import { useGetAllTraining } from '../../hooks';
import { AvatarContainer, Container } from './welcome.style';
import { RootStackParamList } from 'src/app/app.routes';

const schema = yup.object().shape({
  name: yup.string().required('Email is required'),
});

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { trainings, setTrainings } = useGetAllTraining();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSelectTraining = (item: TrainingItem) => {
    const nuevoArray = trainings.map((training) =>
      training.id === item.id
        ? { ...training, selected: !training.selected }
        : training,
    );
    setTrainings(nuevoArray);
  };

  const handlePressStart = () => navigation.navigate('SelectTrainingScreen');

  return (
    <BasicLayout title="Welcome" options={{ showNavBar: false }}>
      <Container>
        <AvatarContainer>
          <AvatarImage name="wamba" size={AvatarSizes.large} />
        </AvatarContainer>
        <Typography type="Subtitle2" color="neutral90">
          How your friends call you?
        </Typography>
        <FieldInput
          control={control}
          name="name"
          hasError={!!errors.name}
          errorMessage={errors.name?.message ?? ''}
        />
        <Typography type="Subtitle2" color="neutral90">
          What do you like to train?
        </Typography>
        <TrainingCarousel
          trainings={trainings}
          onSelect={handleSelectTraining}
        />
        <ActionButton
          title={'Start'}
          onPress={handlePressStart}
          type="primary"
        />
      </Container>
    </BasicLayout>
  );
};

export { WelcomeScreen };
