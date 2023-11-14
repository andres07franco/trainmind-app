import React from 'react';
import { ListLayout } from '@ui-components/templates';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { TopicList } from '@shared/components';
import { useGetTopics } from '../../hooks';
import { useTrainingSelector } from '@training/redux';

const TopicListScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { selectedActivity } = useTrainingSelector();
  const { data } = useGetTopics();
  return (
    <ListLayout
      title={selectedActivity?.name ?? ''}
      icon={selectedActivity?.icon ?? ''}
      subtitle={`${data.length} Lessons`}
    >
      <TopicList
        data={data}
        onSelect={() => navigation.navigate('QuestionScreen')}
      />
    </ListLayout>
  );
};

export { TopicListScreen };
