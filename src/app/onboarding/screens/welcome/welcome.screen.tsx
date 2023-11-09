import React, { useEffect, useState } from 'react';
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
import { AvatarContainer, Container } from './welcome.style';
import firestore from '@react-native-firebase/firestore';

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

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = useState(trainings);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    const getData = async () => {
      const trainings = await firestore().collection('trainings').get();
      console.log(trainings.docs[0].data());
    };
    getData();
  }, []);

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
          trainings={data}
          onSelect={(item) => {
            const nuevoArray = data.map((objeto) =>
              objeto.id === item.id
                ? { ...objeto, selected: !objeto.selected }
                : objeto,
            );
            setData(nuevoArray);
          }}
        />
        <ActionButton
          title={'Start'}
          onPress={() => {
            navigation.navigate('SelectTrainingScreen');
          }}
          type="primary"
        />
      </Container>
    </BasicLayout>
  );
};

export { WelcomeScreen };
