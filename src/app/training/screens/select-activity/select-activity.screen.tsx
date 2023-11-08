import React from 'react';
import { BasicLayout } from '@ui-components/templates';
import {
  ActivitiesProps,
  ActivityCarousel,
  Icon,
  ResourcesBar,
  Typography,
} from '@shared/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';
import { Container, Overlap } from './select-activity.styles';

const activties: ActivitiesProps[] = [
  {
    id: '1',
    icon: 'interview',
    title: 'Interviews',
    instructor: { name: 'Sakura', icon: 'sakura' },
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: '2',
    icon: 'questionnaire',
    title: 'Questionnaire',
    instructor: { name: 'Gero', icon: 'gero' },
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const SelectActivityScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <BasicLayout
      icon={<Icon code="pc-code" />}
      title="Software Development"
      subtitle="2 Activities"
    >
      <Container>
        <Overlap>
          <ActivityCarousel
            activties={activties}
            onSelect={(item) => {
              navigation.navigate('QuestionnaireListScreen');
            }}
          />
        </Overlap>
        <ResourcesBar />
      </Container>
    </BasicLayout>
  );
};

export { SelectActivityScreen };
