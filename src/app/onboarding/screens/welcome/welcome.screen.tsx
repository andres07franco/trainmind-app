import React from 'react';
import * as yup from 'yup';
import { BasicLayout } from '@ui-components/templates';
import { ActionButton, Card, FieldInput, Input, Typography } from '@shared/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Email is required'),
});

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <BasicLayout title="Welcome">
      <Typography type="Subtitle2" color="neutral90">
        How your friends call you?
      </Typography>
      <FieldInput
        control={control}
        name="name"
        hasError={!!errors.name}
        errorMessage={errors.name?.message ?? ''}
        secureTextEntry
      />
      <Typography type="Subtitle2" color="neutral90">
        What do you want to train?
      </Typography>
      <Card>
      <Typography type="Subtitle2" color="primary10">
        English
      </Typography>
      </Card>
      <ActionButton
        title={'Start'}
        onPress={() => {
          navigation.navigate('InterviewScreen');
        }}
        type="primary"
      />
    </BasicLayout>
  );
};

export { WelcomeScreen };
