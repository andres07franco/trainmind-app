import React from 'react';
import { FlatList } from 'react-native';
import { TrainingCard, TrainingCardProps } from '../../molecules';
import { Container } from './training-carousel.style';

export type TrainingItem = {
  id: string;
} & Omit<TrainingCardProps, 'onPress'>;

interface Props {
  trainings: TrainingItem[];
  onSelect: (item: TrainingItem) => void;
}
export const TrainingCarousel: React.FC<Props> = ({ trainings, onSelect }) => {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        initialNumToRender={3}
        renderItem={({ item }) => (
          <TrainingCard
            title={item.title}
            icon={item.icon}
            selected={item.selected}
            onPress={function (): void {
              onSelect(item);
            }}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        data={trainings}
      />
    </Container>
  );
};

export default TrainingCarousel;
