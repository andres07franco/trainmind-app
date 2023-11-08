import React from 'react';
import TranslatorIcon from '@assets/icons/translator.svg';
import BackIcon from '@assets/icons/back.svg';
import VerticalDotsIcon from '@assets/icons/vertical-dots.svg';
import UsaIcon from '@assets/flags/usa.svg';
import ECommerce from '@assets/images/e-commerce.svg';
import InterviewIcon from '@assets/images/interview.svg';
import QuestionnaireIcon from '@assets/images/questionnaire.svg';
import PcCodeIcon from '@assets/images/pc-code.svg';
import FavoriteIcon from '@assets/icons/favorite.svg';
import FavoriteOutlineIcon from '@assets/icons/favorite-outline.svg';
import StarBig from '@assets/icons/star-big.svg';
import LoginCricleIcon from '@assets/icons/login-circle.svg';
import ProfileCricleIcon from '@assets/icons/profile-circle.svg';
import StartOutlineIcon from '@assets/icons/star-outline.svg';
import StartBigIcon from '@assets/icons/star-big.svg';
import StartOutlineBigIcon from '@assets/icons/star-outline-big.svg';
import ActivityIcon from '@assets/icons/activity.svg';
import CheckIcon from '@assets/icons/check.svg';
import TaskIcon from '@assets/icons/task.svg';

import { useTheme } from '@shared/hooks/use-theme.hook';

const icons: Record<string, Record<'dark' | 'light', JSX.Element>> = {
  translator: {
    light: <TranslatorIcon />,
    dark: <TranslatorIcon />,
  },
  back: {
    light: <BackIcon />,
    dark: <BackIcon />,
  },
  'vertical-dots': {
    light: <VerticalDotsIcon />,
    dark: <VerticalDotsIcon />,
  },
  favorite: {
    light: <FavoriteIcon />,
    dark: <FavoriteIcon />,
  },
  'favorite-outline': {
    light: <FavoriteOutlineIcon />,
    dark: <FavoriteOutlineIcon />,
  },
  starBig: {
    light: <StarBig />,
    dark: <StarBig />,
  },
  'login-cricle': {
    light: <LoginCricleIcon />,
    dark: <LoginCricleIcon />,
  },
  'profile-cricle': {
    light: <ProfileCricleIcon />,
    dark: <ProfileCricleIcon />,
  },
  usa: {
    light: <UsaIcon />,
    dark: <UsaIcon />,
  },
  'e-commerce': {
    light: <ECommerce />,
    dark: <ECommerce />,
  },
  interview: {
    light: <InterviewIcon />,
    dark: <InterviewIcon />,
  },
  questionnaire: {
    light: <QuestionnaireIcon />,
    dark: <QuestionnaireIcon />,
  },
  'pc-code': {
    light: <PcCodeIcon />,
    dark: <PcCodeIcon />,
  },
  'start-outline': {
    light: <StartOutlineIcon />,
    dark: <StartOutlineIcon />,
  },
  'start-big': {
    light: <StartBigIcon />,
    dark: <StartBigIcon />,
  },
  'start-outline-big': {
    light: <StartOutlineBigIcon />,
    dark: <StartOutlineBigIcon />,
  },
  activity: {
    light: <ActivityIcon />,
    dark: <ActivityIcon />,
  },
  check: {
    light: <CheckIcon />,
    dark: <CheckIcon />,
  },
  task: {
    light: <TaskIcon />,
    dark: <TaskIcon />,
  },
};

interface Props {
  code: string;
}
export const Icon: React.FC<Props> = ({ code }) => {
  const theme = useTheme();

  const icon = icons[code][theme.colorScheme ?? 'light'];
  return <>{icon}</>;
};
export default Icon;
