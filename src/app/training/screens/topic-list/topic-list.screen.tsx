import React, { useMemo } from 'react';
import { ListLayout, secureRender } from '@ui-components/templates';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { TopicList } from '@shared/components';
import { useGetTopics } from '../../hooks';
import { useTrainingSelector } from '@training/redux';
import { Topic } from '@core/trainings';

const TopicListScreen: React.FC = () => {
  // to fix
  const { navigate } = useNavigation<NavigationProp<any>>();
  const { selectedActivity } = useTrainingSelector();
  const { data } = useGetTopics();

  const routesMapper: Record<string, keyof RootStackParamList> = useMemo(
    () => ({
      questionnaire: 'QuestionScreen',
    }),
    [],
  );

  return secureRender((secureActivity) => {
    const handleSelect = (item: Topic) => {
      if (routesMapper.hasOwnProperty(secureActivity.type)) {
        const route = routesMapper[secureActivity.type];
        console.log(route,item.idTopicActivity)
        navigate(route, { id: item.idTopicActivity });
      }
    };

    return (
      <ListLayout
        title={secureActivity.name}
        icon={secureActivity.icon}
        subtitle={`${data.length} Lessons`}
      >
        <TopicList data={data} onSelect={handleSelect} />
      </ListLayout>
    );
  }, selectedActivity);
};

export { TopicListScreen };
