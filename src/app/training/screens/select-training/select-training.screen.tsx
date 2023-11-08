import React from 'react';
import { BasicLayout } from '@ui-components/templates';
import {
  AvatarImage,
  AvatarSizes,
  ResourcesBar,
  TrainingCarousel,
  TrainingItem,
  Typography,
} from '@shared/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { AvatarContainer, Container, Title } from './select-training.style';

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

const SelectTrainingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <BasicLayout title="Hey Again Carlos!">
      <Container>
        <AvatarContainer>
          <AvatarImage size={AvatarSizes.large} name={'wamba'} />
        </AvatarContainer>
        <Title type="Subtitle2" color="neutral90">
          What do you want to train today?
        </Title>
        <TrainingCarousel
          trainings={trainings}
          onSelect={(item) => {
            navigation.navigate('SelectActivityScreen');
          }}
        />
        <ResourcesBar />
      </Container>
    </BasicLayout>
  );
};

export { SelectTrainingScreen };
