import React from 'react';
import { Container, ButtomsContainer} from './resources-bar.style';
import { ResourceButton } from '@shared/components/molecules';
import { Typography } from '../../atoms';

interface Props {
  onPress?: () => void;
}
export const ResourcesBar: React.FC<Props> = ({ onPress }) => {
  const handlePress = () => onPress?.();
  return (
    <Container>
      <Typography type="Subtitle2" color="neutral90">
        Resources
      </Typography>
      <ButtomsContainer>
        <ResourceButton title="Translator" icon="translator" />
        <ResourceButton title="Progress" icon="activity" />
      </ButtomsContainer>
    </Container>
  );
};

export default ResourcesBar;
