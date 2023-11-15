import { Question } from './question.entity';

export type Questionnaire = {
  id: string;
  description: string;
  overview: string;
  questions: Question[];
  idTopic: string;
};
