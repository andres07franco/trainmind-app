import React from 'react';
import { FlatList } from 'react-native';
import { ActivityCard, Props as ActivityItemProps } from '../../organisms';
import { Container } from './activity-carousel.style';
import { Activity } from '@core/trainings';

interface Props {
  activties: Activity[];
  onSelect: (item: Activity) => void;
}
export const ActivityCarousel: React.FC<Props> = ({ activties, onSelect }) => {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        initialNumToRender={3}
        renderItem={({ item }) => (
          <ActivityCard
            name={item.name}
            instructor={item.instructor}
            description={item.description}
            icon={item.icon}
            onPress={function (): void {
              onSelect(item);
            }}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        data={activties}
      />
    </Container>
  );
};

export default ActivityCarousel;
