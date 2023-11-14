import React from 'react';
import { FlatList } from 'react-native';
import { TopicItem } from '../../molecules';
import { Container } from './topic-list.style';
import { Topic } from '@core/trainings';

interface Props {
  data: Topic[];
  onSelect: (item: Topic) => void;
}
export const TopicList: React.FC<Props> = ({ data, onSelect }) => {
  console.log(data);
  return (
    <Container>
      <FlatList
        scrollEnabled={false} 
        initialNumToRender={3}
        renderItem={({ item }) => (
          <TopicItem
            title={item.name}
            questions={item.totalItems}
            icon={'task'}
            onPress={function (): void {
              onSelect(item);
            }}
            progress={10}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        data={data}
      />
    </Container>
  );
};

export default TopicList;
