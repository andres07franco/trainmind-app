import React from 'react';
import { BasicLayout } from '@ui-components/templates';
import {
  ActivityProps,
  ActivityCarousel,
  Icon,
  ResourcesBar,
} from '@shared/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useGetActivities } from '../../hooks';
import { chooseActivity, useTrainingSelector } from '../../redux';
import { RootStackParamList } from 'src/app/app.routes';
import { Container, Overlap } from './select-activity.styles';

const SelectActivityScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedTraining } = useTrainingSelector();
  const { data } = useGetActivities();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const handleSelect = (item: ActivityProps) => {
    dispatch(chooseActivity(item));
    navigation.navigate('TopicListScreen');
  };

  if (!selectedTraining) {
    return <></>;
  }

  return (
    <BasicLayout
      icon={<Icon code={selectedTraining.icon} />}
      title={selectedTraining.title}
      subtitle={selectedTraining.title}
    >
      <Container>
        <Overlap>
          <ActivityCarousel activties={data} onSelect={handleSelect} />
        </Overlap>
        <ResourcesBar />
      </Container>
    </BasicLayout>
  );
};

export { SelectActivityScreen };
