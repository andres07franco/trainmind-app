import React from 'react';
import {
  Container,
  Description,
  IconContainer,
  Progress,
  TextContainer,
  Title,
} from './activity-item.style';
import { Icon } from '../../atoms';

export interface ActivitytemProps {
  title: string;
  questions: number,
  progress: number,
  icon: string;
  onPress?: () => void;
}

export const ActivityItem: React.FC<ActivitytemProps> = ({
  title,
  questions,
  icon,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <IconContainer>
        <Icon code={icon} />
      </IconContainer>
      <TextContainer>
        <Title type="Caption" color="neutral90">
          {title}
        </Title>
        <Description type="Caption" color="quaternary40">
          {questions}
        </Description>
        <Progress />
      </TextContainer>
    </Container>
  );
};

export default ActivityItem;
