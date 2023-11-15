import React from 'react';
import {
  Container,
  Description,
  IconContainer,
  Progress,
  TextContainer,
  Title,
} from './topic-item.style';
import { Icon } from '../../atoms';

interface Props {
  title: string;
  questions: number,
  progress: number,
  icon: string;
  onPress?: () => void;
}

export const TopicItem: React.FC<Props> = ({
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

export default TopicItem;
