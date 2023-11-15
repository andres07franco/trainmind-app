import React from 'react';

import { BasicLayout, secureRender } from '@ui-components/templates';
import {
  ActionButton,
  AvatarImage,
  AvatarSizes,
  Typography,
} from '@shared/components';
import {
  NavigationProp,
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import { RootStackParamList } from 'src/app/app.routes';

import {
  AsnwerContent,
  AvatarContainer,
  Container,
  QuestionContent,
} from './question.style';
import { useGetQuestionnaire } from '@questionnaire/hooks';

const QuestionScreen: React.FC = ({}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList>>();

  return secureRender(
    (id) => {
      const { data } = useGetQuestionnaire(id);
      const question = data?.questions[0];
      console.log(data)
      return (
        <BasicLayout title="Node JS Senior" options={{ showNavBar: true }}>
          <Container>
            <AvatarContainer>
              <AvatarImage name="sakura" size={AvatarSizes.large} />
            </AvatarContainer>
            <QuestionContent>
              <Typography type="Subtitle2" color="neutral90">
                {question?.question}
              </Typography>
              <AsnwerContent>
                {question?.answers.map((q) => (
                  <Typography type="Subtitle2" color="neutral90">
                    {q.code}- {q.answer}
                  </Typography>
                ))}
              </AsnwerContent>
            </QuestionContent>
            <ActionButton
              title={'Next'}
              onPress={() => {
                navigation.navigate('SelectTrainingScreen');
              }}
              type="primary"
            />
          </Container>
        </BasicLayout>
      );
    },
    route?.params?.id as string,
  );
};

export { QuestionScreen };
