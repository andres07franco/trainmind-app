import React from 'react';
import { FlatList } from 'react-native';
import { ActivityCard, Props as ActivityItemProps } from '../../organisms';
import { Container } from './activity-carousel.style';

export type ActivitiesProps = {
  id: string;
} & Omit<ActivityItemProps, 'onPress'>;

interface Props {
  activties: ActivitiesProps[];
  onSelect: (item: ActivitiesProps) => void;
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
            title={item.title}
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
