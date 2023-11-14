import React from 'react';
import {
  BasicLayout,
  ActionButton,
  AvatarImage,
  AvatarSizes,
  FieldInput,
  TrainingCarousel,
  Typography,
} from '@shared/components';
import { AvatarContainer, Container } from './welcome.style';
import { useWelcomScreen } from './welcome.hook';

const WelcomeScreen: React.FC = () => {
  const { control, errors, trainings, handleSelectTraining, handlePressStart } =
    useWelcomScreen();
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
