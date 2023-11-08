import React from 'react';
import {
  Container,
  Content,
  Description,
  IconContainer,
  StyledCard,
  Title,
} from './activity-card.style';
import { AvatarItem } from '../../molecules';
import { Icon } from '../../atoms';

export type Props = {
  title: string;
  description: string;
  instructor: { name: string; icon: string };
  icon: string
  onPress: () => void;
};

export const ActivityCard: React.FC<Props> = ({
  title,
  description,
  icon,
  instructor,
  onPress,
}) => {
  return (
    <StyledCard>
      <Container onPress={onPress}>
        <Content>
          <IconContainer>
            <Icon code={icon} />
          </IconContainer>
          <Title type="Subtitle" color="primary40">
            {title}
          </Title>
          <Description type="Caption" color="quaternary40">
            {description}
          </Description>
        </Content>
        <AvatarItem
          title="Instructor"
          name={instructor.name}
          iconName={instructor.icon}
        />
      </Container>
    </StyledCard>
  );
};

export default ActivityCard;