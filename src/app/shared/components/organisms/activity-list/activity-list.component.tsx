import React from 'react';
import { FlatList } from 'react-native';
import { ActivityItem, ActivitytemProps } from '../../molecules';
import { Container } from './activity-list.style';

export type Activitytem = {
  id: string;
} & Omit<ActivitytemProps, 'onPress'>;

interface Props {
  data: Activitytem[];
  onSelect: (item: Activitytem) => void;
}
export const ActivityList: React.FC<Props> = ({ data, onSelect }) => {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={3}
        renderItem={({ item }) => (
          <ActivityItem
            title={item.title}
            questions={item.questions}
            icon={item.icon}
            onPress={function (): void {
              onSelect(item);
            }}
            progress={item.progress}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        data={data}
      />
    </Container>
  );
};

export default ActivityList;
