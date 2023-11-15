import React from 'react';
import { BasicLayout, secureRender } from '@ui-components/templates';
import { ActivityCarousel, Icon, ResourcesBar } from '@shared/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useGetActivities } from '../../hooks';
import { chooseActivity, useTrainingSelector } from '../../redux';
import { RootStackParamList } from 'src/app/app.routes';
import { Container, Overlap } from './select-activity.styles';
import { Activity } from '@core/trainings';

const SelectActivityScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedTraining } = useTrainingSelector();
  const { data } = useGetActivities();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSelect = (item: Activity) => {
    dispatch(chooseActivity(item));
    navigation.navigate('TopicListScreen');
  };

  return secureRender(
    (secureTraining) => (
      <BasicLayout
        icon={<Icon code={secureTraining.icon} />}
        title={secureTraining.title}
        subtitle={secureTraining.title}
      >
        <Container>
          <Overlap>
            <ActivityCarousel activties={data} onSelect={handleSelect} />
          </Overlap>
          <ResourcesBar />
        </Container>
      </BasicLayout>
    ),
    selectedTraining,
  );
};

export { SelectActivityScreen };
