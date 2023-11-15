import { Answer } from './answer.entity';

export type Question = {
  question: string;
  correctAnswerCode: string[];
  answers: Answer[];
};
