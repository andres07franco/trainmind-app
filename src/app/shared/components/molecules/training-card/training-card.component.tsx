import React from 'react';
import { Container, Footer, Title } from './training-card.style';
import { Card, Icon } from '@shared/components/atoms';

export interface TrainingCardProps {
  title: string;
  icon: string;
  selected: boolean;
  onPress: () => void;
}

export const TrainingCard: React.FC<TrainingCardProps> = ({
  title,
  icon,
  selected,
  onPress,
}) => {
  return (
    <Card>
      <Container onPress={onPress}>
        <Icon code={icon} />
        <Footer>
          <Title type="Caption" color="primary40">
            {title}
          </Title>
          {selected && <Icon code="check" />}
        </Footer>
      </Container>
    </Card>
  );
};

export default TrainingCard;
