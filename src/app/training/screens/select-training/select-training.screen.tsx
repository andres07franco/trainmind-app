import React from 'react';
import { BasicLayout, secureRender } from '@ui-components/templates';
import {
  AvatarImage,
  AvatarSizes,
  ResourcesBar,
  TrainingCarousel,
  TrainingProps,
} from '@shared/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { AvatarContainer, Container, Title } from './select-training.style';
import { useGetTrainingsByUser } from '../../hooks';
import { useSessionSelector } from '@shared/redux/selectors';
import { useDispatch } from 'react-redux';
import { chooseTraining } from '@training/redux';

const SelectTrainingScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useGetTrainingsByUser();
  const { user } = useSessionSelector();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handelSelect = (item: TrainingProps) => {
    dispatch(chooseTraining(item));
    navigation.navigate('SelectActivityScreen');
  };

  return secureRender(
    (secureUser) => (
      <BasicLayout title={`Hey Again ${secureUser.name}!`}>
        <Container>
          <AvatarContainer>
            <AvatarImage size={AvatarSizes.large} name={'wamba'} />
          </AvatarContainer>
          <Title type="Subtitle2" color="neutral90">
            What do you want to train today?
          </Title>
          <TrainingCarousel trainings={data} onSelect={handelSelect} />
          <ResourcesBar />
        </Container>
      </BasicLayout>
    ),
    user,
  );
};

export { SelectTrainingScreen };
